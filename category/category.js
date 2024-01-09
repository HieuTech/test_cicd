// document.getElementById("addToCart").addEventListener("click",()=>{
//     addToCart();
// });

function addToCart() {
    let token =  JSON.parse(localStorage.getItem("token",token));
    if(!token){
        window.location.href = "/signin";
    }

}

function buyNow(){
 let token = JSON.parse(localStorage.getItem("token", token));
 if (!token) {
   window.location.href = "/signin";
 }


}