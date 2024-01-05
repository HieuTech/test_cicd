

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
    
    if(newPassword != retypePassword){
        alert("mat khau ko chinh xac")
        return
    }

    retypePassword = hashPassword(retypePassword);
    userEmail.password = retypePassword;
       
    console.log(userEmail.password);
    
    

    localStorage.setItem("users", JSON.stringify(users))
    window.location.href= "/signin";

}


