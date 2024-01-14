

// document.getElementById("signUp").addEventListener("submit",(e)=>{
//   signUp(e);
// });



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
    password: hashPassword(password),
    avatar: "   https://cdn-icons-png.flaticon.com/512/1154/1154448.png ",
    cart:[],
    orders:[]
  };

  let user = users.find((user) => user.email == email);

  if (user) {
    alert("ten dang ky da ton tai");
    return;
  }

  users = [...users, newUser]

  localStorage.setItem("users", JSON.stringify(users));

 notify("Đăng Nhập Thành Công");
 setTimeout(() => {
   window.location.href = "/signin";
 }, 1500);
}




function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(
    password
  );
}
