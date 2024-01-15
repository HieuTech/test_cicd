import { signInWithGoogle, uploadFileToFireBaseStorage } from "../firebase.js";

if (checkLogin()) {
  window.location.href = "/";
}

function setAdmin(email,password) {
  let admins = []
  let admin = {
    email,
    password
  };
  admins.push(admin)
  localStorage.setItem("admins", JSON.stringify(admins));
}
document
  .getElementById("signInWithGoogle")
  .addEventListener("click", async () => {
    try {
      let result = await signInWithGoogle();
      console.log(result);

      let users = JSON.parse(localStorage.getItem("users") || "[]");

      let checkUser = users.find((user) => user.email == result.user.email);

      if (!checkUser) {
        let userLogin = {
          id: "" + Math.ceil(Date.now() * Math.random()),
          email: result.user.email,
          password: hashPassword("EFDMWDMMWS"),
          avatar: result.user.photoURL,
          cart: [],
          orders: [],
        };

        users = [...users, userLogin];
        localStorage.setItem("users", JSON.stringify(users));
        console.log(userLogin);
        let token = createToken(userLogin);
        localStorage.setItem("token", token);
        window.location.href = "/";
      } else {
        let token = createToken(checkUser);
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
      //register+login
      //login
    } catch (error) {
      alert("vui long thu lai");
    }
  });

document.getElementById("signIn").addEventListener("submit", async (e) => {


  //   let data = {
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //     avatar: await  uploadFileToFireBaseStorage(e.target.file.files[0])


  //   }
  // console.log(data);
  //   return

  signIn(e);
});

function signIn(e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  let email = e.target.email.value;
  let password = hashPassword(e.target.password.value);

  let passwordAdmin = e.target.password.value;

  if (!email || !password) {
    alert("Email và Password không được để trống.");
    return;
  }

  if (email == "admin@gmail.com" && passwordAdmin == "123") {
    setAdmin(email,password);
    window.location.href = "/";
  }else{
 let user = users.find(
   (user) => user.email == email && user.password == password
 );

 if (!user) {
   alert("email or password ko dung");
   return;
 }

 let userLogin = {
   email,
   password,
   avatar: user.avatar,
 };

 let token = createToken(userLogin);
 localStorage.setItem("token", token);
 window.location.href = "/";
  }
 
}
