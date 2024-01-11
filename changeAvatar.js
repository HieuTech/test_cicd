import {  uploadFileToFireBaseStorage } from "./firebase.js";


document.getElementById("formAvatar").addEventListener("submit", async (e) => {
    e.preventDefault();
  let data = {
    avatar: await uploadFileToFireBaseStorage(e.target.file.files[0]),
  };
  console.log(data);
  return;
});


