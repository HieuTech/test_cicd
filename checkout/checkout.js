let totalPrice = 0;
let quantity = 0;

function renderInfo(){
 let users = JSON.parse(localStorage.getItem("users") || "[]");
 let tokenData = decodeToken(localStorage.getItem("token"));
 users.forEach((user) => {
   if (user.email == tokenData.userLogin.email) {
     user.cart.forEach((cart) => {
         totalPrice += parseInt(
           cart.productPrice.replace(" VND", "").replace(".", "")
         );

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


function submitForm(e) {
    e.preventDefault();
        let orders = JSON.parse(localStorage.getItem("orders") || "[]");

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

  let order =
    {
    orderId: Math.ceil(Math.random() * Date.now()),
    name,
    phone,
    address,
    note,
    payment
  }
  orders = [...orders, order]
  localStorage.setItem("orders", JSON.stringify(orders));


//Reset Cart

   let users = JSON.parse(localStorage.getItem("users") || "[]");
   let tokenData = decodeToken(localStorage.getItem("token"));

   users.forEach((user) => {
     if (user.email == tokenData.userLogin.email) {
       user.cart = []
     }
   });
    localStorage.setItem("users",JSON.stringify(users));


  Toastify({
    text: "Đặt hàng Thành Công!",
    duration: 3000, // Thời gian hiển thị toast (ms)
    gravity: "center", // Vị trí hiển thị: top, bottom, left, right
    position: "center", // Đặt vị trí tương đối: top-left, top-center, top-right, ...
    backgroundColor: "green", // Màu nền
    stopOnFocus: true, // Dừng hiển thị khi người dùng tập trung vào
  }).showToast();
  setTimeout(() => {
    window.location.href = "/";
  }, 3000);
}


renderInfo();
