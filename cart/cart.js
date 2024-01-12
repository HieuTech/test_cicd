let totalPrice = 0;
let quantity = 0;
function buyNow(productId) {
  let products = JSON.parse(localStorage.getItem("products") || "[]");
  let product = products.find((product) => product.productId == productId);

  productInCart = [...productInCart, product];

  localStorage.setItem("productInCart", JSON.stringify(productInCart));

  window.location.href = "/cart";
}

function addToCart(productId) {

  let products = JSON.parse(localStorage.getItem("products") || "[]");
  let product = products.find((product) => product.productId == productId);
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email ) {
      user.cart.push(product);

    }
  });
  localStorage.setItem("users", JSON.stringify(users));
  Toastify({
    text: "Thêm giỏ hàng Thành công!",
    duration: 3000, // Thời gian hiển thị toast (ms)
    gravity: "center", // Vị trí hiển thị: top, bottom, left, right
    position: "center", // Đặt vị trí tương đối: top-left, top-center, top-right, ...
    backgroundColor: "green", // Màu nền
    stopOnFocus: true, // Dừng hiển thị khi người dùng tập trung vào
  }).showToast();
}

function renderCart(products) {
  return products
    .map((product) => {
      return `
          <div class="grid-item">
        <img src="${product.productImage}"  class="product-image">
        <div class="content">
       <h3 class="product-name">${product.productName}</h3>
            <p class="product-price">${product.productPrice}</p>
    <button onclick="decrease(${product.productId})">Remove</button>
  </div>
    </div>
   
        `;
    })
    .join("");
}
function showProduct() {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      user.cart.forEach((cart) => {
        totalPrice += parseInt(
          cart.productPrice.replace(" VND", "").replace(".", "")
        );
        document.querySelector(
          ".totalPrice"
        ).innerHTML = `TotalPrice:  ${totalPrice} VND`;
            quantity += cart.quantity
        document.querySelector(
          ".quantity"
        ).innerHTML = `Quantity:  ${quantity} Unit`;


      });

      document.getElementById("list").innerHTML = renderCart(user.cart);
    }
  });
}
showProduct();



function decrease(id) {
    if (!confirm("Do You Want To Delete It?")) return;

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      console.log(id);
      user.cart = user.cart.filter((item) => 
            item.productId !== id
      );

    }
});

localStorage.setItem("users", JSON.stringify(users));

Toastify({
  text: "Xoá Sản Phẩm Thành Công!",
  duration: 3000, // Thời gian hiển thị toast (ms)
  gravity: "center", // Vị trí hiển thị: top, bottom, left, right
  position: "center", // Đặt vị trí tương đối: top-left, top-center, top-right, ...
  backgroundColor: "green", // Màu nền
  stopOnFocus: true, // Dừng hiển thị khi người dùng tập trung vào
}).showToast();
setTimeout(()=>{
window.location.reload();

},1000)
}
