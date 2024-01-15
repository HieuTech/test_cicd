
document.getElementById("resetPW").addEventListener("submit",(e)=>{
    resetPW(e);
})

function resetPW(e){
    e.preventDefault();

    let email = e.target.email.value;
    let newPassword = e.target.newpassword.value;
    let retypePassword = e.target.retypePassword.value;

    let users = JSON.parse(localStorage.getItem("users"))

    let userEmail = users.find(user => user.email == email)


    if(!userEmail){
        alert("email ko ton tai")
        return
    }
    if (!userEmail || !retypePassword || !newPassword) {
      alert("Email và Password không được để trống.");
      return;
    }
    
    if(newPassword !== retypePassword){
        alert("mat khau ko chinh xac")
        return
    }
   

    retypePassword = hashPassword(retypePassword);
    userEmail.password = retypePassword;
       
    console.log(userEmail.password);
     sendEmail(
       userEmail.email,
       "Mật khẩu mới của bạn",
       userEmail.email.replace("@gmail.com", ""),
       `Mật khẩu mới của bạn là ${newPassword}
       `
     );
    

    localStorage.setItem("users", JSON.stringify(users))
    notify("Reset password thành công");
    setTimeout(() => {

      window.location.href= "/signin";
    }, 1000);

}


