
//-------------SETROLEADMIN----------------------






// function chatFacebook() {
//   return `
 
//   `;
// }

// document.querySelector(".chatFacebook").innerHTML = chatFacebook();
document.querySelector(".grid-container").innerHTML = renderProduct();
document
  .getElementById("root")
  .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));

document.getElementById("root").insertAdjacentHTML("beforeend", renderFooter());



//-------------------Animations------------------------
function changeBackgroundGradient() {
  var background = document.querySelector(".grid-container");
  var colors = [
    "#ff6b6b",
    "#ffa07a",
    "#ffd700",
    "#90ee90",
    "#87ceeb",
    "#c0c0c0",
    "#dda0dd",
  ];
  var currentIndex = 0;

  function animateGradient() {
    background.style.backgroundPosition =
      "0% " + (100 - currentIndex * 14) + "%";
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(animateGradient, 500);
  }

  animateGradient();
}

changeBackgroundGradient();

