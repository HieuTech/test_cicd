
let dataUsers = [{
    
       id: "" + Math.ceil(Date.now() * Math.random()),
       email: "test",
       password: "test"
     
}]


if(!localStorage.getItem("user")){
    localStorage.setItem("user",JSON.stringify(dataUsers))
}

function signUp(e) {
    e.preventDefault();
  let email = document.querySelector("#InputEmail1").value;
  let password = document.querySelector("#InputPassword1").value;
  let users = JSON.parse(localStorage.getItem("user")) ;


  let user = users.find((user) => user.email === email);

  if(user){
    alert("ten dang ky da ton tai")
    return
  }

   let newUser = 
     {
       id: "" + Math.ceil(Date.now() * Math.random()),
       email,
       password,
     }
   
   dataUsers.push(newUser);

    localStorage.setItem("user", JSON.stringify(dataUsers));
  
    window.location.href = "/signin"
}


