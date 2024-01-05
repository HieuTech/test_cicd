import { signInWithGoogle } from "../firebase.js";

document
  .getElementById("signInWithGoogle")
  .addEventListener("click", async () => {
    try {
      let result = await signInWithGoogle();
      console.log(result);

      let users = JSON.parse(localStorage.getItem("users") || "[]");

      let checkUser = users.find((user) => user.email == result.user.email);
   
      if(!checkUser) {
       let userLogin = {
         id: "" + Math.ceil(Date.now() * Math.random()),
         email: result.user.email,
         password: hashPassword("EFDMWDMMWS"),
         avatar: result.user.photoURL,
       };

       users = [...users, userLogin];
       localStorage.setItem("users", JSON.stringify(users));

       let token = createToken(userLogin);
       localStorage.setItem("token", token);
       window.location.href = "/";
      }

        let token = createToken(checkUser);
        localStorage.setItem("token", token);
        window.location.href = "/";
        //register+login
        //login
       
      
    }catch (error) {
      alert("vui long thu lai");
    }
  });

document.getElementById("signIn").addEventListener("submit", (e) => {
  signIn(e);
});

function signIn(e) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  let email = e.target.email.value;
  let password = hashPassword(e.target.password.value);

  let user = users.find(
    (user) => user.email == email && user.password == password
  );
  console.log(user);
  if (!user) {
    alert("email or password ko dung");
    return;
  }

  let userLogin = {
    email,
    password,
  };

  let token = createToken(userLogin);
  localStorage.setItem("token", token);

  window.location.href = "/";
}
