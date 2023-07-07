const dropZone = document.querySelector(".drop-zone")
const fileinput = document.querySelector("#fileinput");
const browsebtn = document.querySelector(".browsebtn")

const host = "http://innshare.herokuapp.com/"
const uploadURL = `${host}api/files`;
// const uploadURL = `${host}api/files`;

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
//     const file = fileinput.files[0];
//     const formData = new FormData();
//     formData.append("myfile",file);
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange =()=> {
//       if(xhr.readyState === XMLHttpRequest.DONE) {
//         console.log(xhr.response)
//       }
//     }

//     fetch('https://reqres.in/api/users',{
//         method: "POST",
//         body:   formData,
//     })
//     .then(res =>res.json())
//     .then(data => console.log(data))
//     .then(error => console.log(error));

 })

    browsebtn.addEventListener("click", ()=>{
    fileinput.click()
})

const uploadFile =()=> {
    const file = fileinput.files[0];
    const formData = new FormData();
    formData.append("myfile",file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange =()=> {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response)
      }
    }

    xhr.upload.onprogress = updateProgress;

    xhr.open("POST",uploadURL);
    xhr.send(formData)
};

const updateprogress = (e) => {
     console.log(e); 
}