
function signIn(e) {
    e.preventDefault();
  let users = JSON.parse(localStorage.getItem("user"));

  let emailSignIn = document.querySelector("#inputEmail").value;
  let passwordSignIn = document.querySelector("#inputPassword").value;

  let loginEmail = users.find((user) => user.email == emailSignIn);
  
  if (!loginEmail) {
    alert("email ko ton tai, hay dang ky");
    return;
  }
  let loginPassword = users.find((user) => user.password == passwordSignIn);
  if (!loginPassword) {
    alert("password ko dung!");
    return;
  }

  let userLogin = {
    token: ""+ Math.ceil(Date.now() * Math.random()),
    loginEmail,
    loginPassword,
  };
  localStorage.setItem("userLogin", JSON.stringify(userLogin));
  window.location.href = "/";
}
