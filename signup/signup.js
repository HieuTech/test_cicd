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


if (!email || !password) {
  alert("Email và Password không được để trống.");
  return
} else if (!isValidEmail(email)) {
  alert("Email không hợp lệ.");
  return
} else if (!isValidPassword(password)) {
  alert("Password không hợp lệ. Yêu cầu ít nhất 6 ký tự, 1 viết hoa, 1 số và 1 ký tự đặc biệt.");
  return
} 
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




function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(
    password
  );
}
