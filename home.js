


document.querySelector(".grid-container").innerHTML = renderProduct();
  document
    .getElementById("root")
    .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));


document.getElementById("root").insertAdjacentHTML("beforeend", renderFooter());

//-------------------CHECKADMINACCOUNT------------------------
function checkAdminAccount() {
  let users = JSON.parse(localStorage.getItem("users"));
    let tokenData = decodeToken(localStorage.getItem("token"));
    users.forEach((user) => {
      if (tokenData.userLogin.email != "admin@gmail.com") {
          document.querySelector(".adminPage").style.display = "none";

      }
    });
}

checkAdminAccount();
