const dropZone = document.querySelector(".drop-zone")
const fileinput = document.querySelector("#fileinput");
const browsebtn = document.querySelector(".browsebtn")
const bgProgress = document.querySelector("bg.progress");
const progressBar = document.querySelector(".progress-bar")
const percentDiv = document.querySelector("#percent")
const progressContainer = document.querySelector(".progress-container")
const sharingContainer = document.querySelector('.sharing-container')
const fileURLInput = document.querySelector('#fileURL')
const copBtnL = document.querySelector('#copyBTN')
const emailForm = document.querySelector('#emailForm')
const toast = document.querySelector('.toast')

const host = "http://localhost:3000/"
const uploadURL = `${host}api/files`;
const emailURL = `${host}api/files/send`; 
// const uploadURL = `${host}api/files`;
const maxAllowedSize = 100 * 1024 *1024;

dropZone.addEventListener("dragover", (e) =>{
    console.log("dragging");
    e.preventDefault();
    if(!dropZone.classList.contains("dragged")) {
        dropZone.classList.add("dragged")
    }
    
})

dropZone.addEventListener("dragleave",() =>{
    dropZone.classList.remove("dragged")
})

fileinput.addEventListener("change", ()=>{
    uploadFile();
})

dropZone.addEventListener("drop", (e) =>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    // console.log(files);
    if(files.length) {
        fileinput.files=files;
    }
    uploadFile();


 })

    fileinput.addEventListener("change", ()=> {
        uploadFile();
    })

    browsebtn.addEventListener("click", ()=>{
    fileinput.click()
})



copyBtn.addEventListener("click", () => {
    fileURLInput.select()
    document.execCommand("copy")
    showToast("Link Copied");
})
const uploadFile =()=> {

    const file = fileinput.files[0];
    if(fileinput.files>1) {
       resetFileInput()
        showToast("Upload only 1 file!")
        return;
    }
    if(files.size >maxAllowedSize ) {
        resetFileInput()
        showToast("Can't upload more than 100MB")
        return;
    }
    progressContainer.style.display = "block";
    const formData = new FormData();
    formData.append("myfile",file);

    const xhr = new XMLHttpRequest();
    //
    xhr.onreadystatechange =()=> {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);
        onUploadSuccess(JSON.parse(xhr.response));
      }
    }

    xhr.upload.ongrograss = updateProgress;
    xhr.upload.onerror =()=>{
        resetFileInput()
        showToast(`Error in upload: ${xhr.statusText}`)
    }

    xhr.open("POST",uploadURL);
    xhr.send(formData)
};

const updateProgress = (e) => {
     const percent = Math.round((e.loaded / e.total)*100);
    //  console.log(percent);
     bgProgress.style.width = `${percent}%`
     percentDiv.innerText = percent;
     progressBar.style.transform = `scaleX(${percent/100}/)`

}

const onUploadSuccess = ({file: url}) => {
      console.log(e)
      resetFileInput()
      emailForm[2].removeAttribute("disabled")

      progressContainer.style.display = "none"
      sharingContainer.style.display = "block"
      fileURLInput.value = url;

}

 const resetFileInput = () =>{
    fileinput.value = "";
 }

emailForm.addEventListener("submit",(e) => {
    e.preventDefault()
    const url = fileURLInput.value;
    const formData = {
        uuid: url.split("/").splice(-1,1)[0],
        emailTo: emailForm.elements["to-email"],
        emailFrom: emailForm.elements["from-email"].value,
    }

    emailForm[2].setAttribute("disabled","true")
    console.table(formData)

    fetch(emailURL, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
    }).then((res) => res.json())
      .then(({success}) =>{
          sharingContainer.style.display = "none";
          showToast("Email sent")
    });
})

let toastTimer;
const showToast=(msg) => {
    toast.innerText = msg;
    toast.style.transform = "translate(-50%,0)"
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>{
    toast.style.transform = "translate(-50%,60px)" 
    },2000);
}