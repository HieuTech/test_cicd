import { signInWithGoogle } from "../firebase.js";


document.getElementById("signUp").addEventListener("submit",(e)=>{
  signUp(e);
});

document.getElementById('signUpWithGoogle').addEventListener("click",async ()=>{

   try {
    let result = await signInWithGoogle();
    let users = JSON.parse(localStorage.getItem("users") || "[]")
   
    let userLogin = {
      email: result.user.email,
      password: hashPassword("SDKWMKDW"),
      id:"" + Math.ceil(Date.now() * Math.random()),
      avatar: result.user.photoURL
    }
    let user = users.find(user => user.email == result.user.email)
    if(!user){

      users = [...users, userLogin]
      localStorage.setItem("users",JSON.stringify(users));
    }
    
    let token = createToken(userLogin);
    localStorage.setItem("token",token);
    window.location.href = "/"
  

  } catch (error) {
      console.log("sign up failed");
  }
})

  function signUp(e) {
  e.preventDefault();
  let email = e.target.email.value;
  let password = e.target.password.value;
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  let newUser = {
    id: "" + Math.ceil(Date.now() * Math.random()),
    email,
    password: hashPassword(password)
  };

  let user = users.find((user) => user.email == email);

  if (user) {
    alert("ten dang ky da ton tai");
    return;
  }

  users = [...users, newUser]

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "/signin";
}




