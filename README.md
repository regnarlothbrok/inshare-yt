# inshare-yt
The Inshare web application serves as a platform enabling individuals to share their documents within a specified size limit.
Users can conveniently distribute files by sending a link via email, which the recipient can simply click on to initiate the download process.
&nbsp;  
&nbsp;  
![Screenshot 2023-07-19 221752](https://github.com/regnarlothbrok/inshare-yt/blob/3c1c7b13df81963502bb89e57bfb53854b822481/Screenshot%202023-07-19%20221752.png)


Just drag and drop a file in the drop area, and a link will be generated for download page.
&nbsp;  
&nbsp;
![Screenshot 2023-07-19 221823](https://github.com/regnarlothbrok/inshare-yt/blob/d52bd81b28aea014174dfe4932c44a6bfc247bb3/Screenshot%202023-07-19%20221823.png)


just copy and paste the link to go on the download page or click on the link to redirect to the download page.
&nbsp;  
&nbsp;
![Screenshot 2023-07-19 221914](https://github.com/regnarlothbrok/inshare-yt/blob/d52bd81b28aea014174dfe4932c44a6bfc247bb3/Screenshot%202023-07-19%20221941.png)


just write sender and receiver mailid and mail will be send to receiver mailid.
&nbsp;  
&nbsp;
![Screenshot 2023-07-19 221914](https://github.com/regnarlothbrok/inshare-yt/blob/d52bd81b28aea014174dfe4932c44a6bfc247bb3/Screenshot%202023-07-19%20222519.png)


You can see the mail has been received. To download just click on the link. 
&nbsp;  
&nbsp;
![Screenshot 2023-07-19 221914](https://github.com/regnarlothbrok/inshare-yt/blob/d52bd81b28aea014174dfe4932c44a6bfc247bb3/Screenshot%202023-07-19%20222609.png)

## Installation Guide
### Requirements
- [Node.js](https://nodejs.org/en/download)
- [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
- [VScode](https://code.visualstudio.com/download)

Both should be installed and make sure mongodb is running.

Now install the required dependencies.  
```cd server
npm install
cd ..
cd public
npm install
```
To start the servers,  

For frontend
```
cd public
npm run dev
```
For backend
```
cd ../server
nodemon index.js
```
Now open index.html file and install live server extension, right click on mouse and run live server on port setting: go live.
