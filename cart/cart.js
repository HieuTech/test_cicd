let totalPrice = 0;
let quantity = 0;

function buyNow(productId) {
  let products = JSON.parse(localStorage.getItem("products") || "[]");
  let product = products.find((product) => product.productId == productId);

  productInCart = [...productInCart, product];

  localStorage.setItem("productInCart", JSON.stringify(productInCart));

  window.location.href = "/cart";
}
//------------------ADDTOCART---------------------

function addToCart(productId) {
  let products = JSON.parse(localStorage.getItem("products") || "[]");
  let product = products.find((product) => product.productId == productId);
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      user.cart.push(product);
    }
  });
  localStorage.setItem("users", JSON.stringify(users));

  notify("Thêm giỏ hàng thành công");
}

//-------------------------_SHOWCART------------------------
function renderCart(products) {
  return products
    .map((product) => {
      return `
          <div class="grid-item">
        <img src="${product.productImage}"  class="product-image">
        <div class="content">
       <h3 class="product-name">${product.productName}</h3>
            <p class="product-price">${product.productPrice}</p>
            <p class="product-quantity">${product.quantity}</p>

    <button onclick="decrease(${product.productId})">Remove</button>
     <button onclick="increase(${product.productId})">Add More</button>
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
      console.log(user.email);
      user.cart.forEach((cart) => {
        totalPrice +=
          parseInt(cart.productPrice.replace(" VND", "").replace(".", "")) *
          cart.quantity;
        document.querySelector(
          ".totalPrice"
        ).innerHTML = `TotalPrice:  ${totalPrice} VND`;
        quantity += cart.quantity;
        document.querySelector(
          ".quantity"
        ).innerHTML = `Quantity:  ${quantity} Unit`;
      });

      document.getElementById("list").innerHTML = renderCart(user.cart);
    }
  });
}
showProduct();

//-------------------------------RemoveItem-------------------------
// function decrease(id) {
//   let users = JSON.parse(localStorage.getItem("users") || "[]");
//   let tokenData = decodeToken(localStorage.getItem("token"));

//   users.forEach((user) => {
//     if (user.email == tokenData.userLogin.email) {
//       user.cart.forEach((cart) => {
//         if (cart.productId === id) {
//           cart.quantity -= 1;
//           if (cart.quantity <= 0) {
//             user.cart = user.cart.filter((item) => item.productId !== id);
//           }
//           let totalPrice = 0;
//           let itemPrice = parseInt(
//             cart.productPrice.replace(" VND", "").replace(".", "")
//           );
//           totalPrice += itemPrice * cart.quantity;

//           document.querySelector(
//             ".totalPrice"
//           ).innerHTML = `TotalPrice:  ${totalPrice} VND`;
//           quantity = quantity - 1;
//           document.querySelector(
//             ".quantity"
//           ).innerHTML = `Quantity:  ${quantity} Unit`;
//         }
//       });
//       document.getElementById("list").innerHTML = renderCart(user.cart);
//     }
//   });

//   localStorage.setItem("users", JSON.stringify(users));
// }
function decrease(id) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      for (let i = 0; i < user.cart.length; i++) {
        let cart = user.cart[i];
        if (cart.productId === id) {
          cart.quantity -= 1;
          quantity = quantity - 1;
          if (cart.quantity < 1) {
            user.cart.splice(i, 1); // Remove the item from the array
          }
          document.querySelector(
            ".quantity"
          ).innerHTML = `Quantity:  ${quantity} Unit`;
        }
      }

      let subTotal = user.cart.reduce((total, product) => {
        return (
          total +
          parseInt(product.productPrice.replace(" VND", "").replace(".", "")) *
            product.quantity
        );
      }, 0);

      document.querySelector(
        ".totalPrice"
      ).innerHTML = `TotalPrice:  ${subTotal} VND`;

      document.getElementById("list").innerHTML = renderCart(user.cart);
    }
  });

  localStorage.setItem("users", JSON.stringify(users));
}


//-----------------------------------INCREASEPRODUCT--------------------------------

function increase(id) {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      user.cart.forEach((cart) => {
        if (cart.productId === id) {
          cart.quantity += 1;
          quantity = quantity + 1;
          document.querySelector(
            ".quantity"
          ).innerHTML = `Quantity:  ${quantity} Unit`;
        }
      });

      let subTotal = user.cart.reduce((total, product) => {
        return (
          total +
          parseInt(product.productPrice.replace(" VND", "").replace(".", "")) *
            product.quantity
        );
      }, 0);

      document.querySelector(
        ".totalPrice"
      ).innerHTML = `TotalPrice:  ${subTotal} VND`;

      document.getElementById("list").innerHTML = renderCart(user.cart);
    }
  });

  localStorage.setItem("users", JSON.stringify(users));
}


function totalCart() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let lowercaseLoginId = localStorage.getItem("loginId").trim();
  let currentUser = users.find(
    (user) => user.userName.trim() === lowercaseLoginId
  );
  let subTotal = currentUser.cart.reduce((total, product) => {
    return total + parseFloat(product.price) * product.quantity;
  }, 0);
}
