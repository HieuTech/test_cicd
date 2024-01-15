

let totalPrice = 0;
let quantity = 0;

function renderInfo(){
 let users = JSON.parse(localStorage.getItem("users") || "[]");
 let tokenData = decodeToken(localStorage.getItem("token"));

 users.forEach((user) => {
   if (user.email == tokenData.userLogin.email) {

     
     if(user.cart.length === 0){
        alert("Cart is empty, Continious to shop?");
        window.location.href = "/"
        return
     }
     user.cart.forEach((cart) => {
       totalPrice +=
         parseInt(cart.productPrice.replace(" VND", "").replace(".", "")) *
         cart.quantity;
       document.querySelector(
         "#total-price"
       ).innerHTML = `TotalPrice:  ${totalPrice} VND`;
       quantity += cart.quantity;
       document.querySelector(
         "#total-products"
       ).innerHTML = `Quantity:  ${quantity} Unit`;
     });

   }
 });
}

//--------------------------SUBMIT CHECKOUT----------------------

document.getElementById("submitForm").addEventListener("submit",(e)=>{
    submitForm(e);
})

function submitForm(e) {
    e.preventDefault();
        let orders = JSON.parse(localStorage.getItem("orders") || "[]");
 let thoiGianHienTai = new Date();
 let ngay = thoiGianHienTai.getDate();
 let thang = thoiGianHienTai.getMonth() + 1;
 let nam = thoiGianHienTai.getFullYear();

 let name = e.target.name.value;
 let address = e.target.address.value;
 let phone = e.target.phone.value;
 let note = e.target.notes.value;
 let payment = e.target.paymentMethod.value;

 if (!name) {
   alert("Please enter your name.");
   return false;
 }

 if (!phone) {
   alert("Please enter your phone number.");
   return false;
 } else if (!phone.startsWith("0") || phone.length !== 10) {
   alert("Phone number must start with '0' and be 10 digits long.");
   return false;
 }
 if (!address) {
   alert("Please enter your address.");
   return false;
 }
  let order = {
    orderId: Math.ceil(Math.random() * Date.now()),
    name,
    phone,
    address,
    note,
    payment,
    createAt:  `${ngay}/${thang}/${nam}`,
    status: null
  };
  orders = [...orders, order]
  localStorage.setItem("orders", JSON.stringify(orders));



//Reset Cart

   let users = JSON.parse(localStorage.getItem("users") || "[]");
   let tokenData = decodeToken(localStorage.getItem("token"));

   users.forEach((user) => {
     if (user.email == tokenData.userLogin.email) {
       user.cart = []
       user.orders.push(order)
        console.log(user.email);
       userEmail = user.email.replace("@gmail.com","");
       sendEmail(
        user.email,
         "Xác nhận tạo đơn hàng thành công",
         userEmail,
         `Đơn hàng của bạn đã được tạo thành công và sẽ giao trong 2 ngày tới.
       Best Regard.
       `
       );

     }
   });
    
   localStorage.setItem("users",JSON.stringify(users));


notify("Đặt hàng thành công");
  setTimeout(() => {
    window.location.href = "/";
  }, 3000);
}
     
renderInfo()



