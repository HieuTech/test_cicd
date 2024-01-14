// import { uploadFileToFireBaseStorage } from "../firebase.js";

//-------------------------Notify------------------------



const notify = (str) => {
  Toastify({
    text: str,
    duration: 3000, // Thời gian hiển thị toast (ms)
    gravity: "center", // Vị trí hiển thị: top, bottom, left, right
    position: "center", // Đặt vị trí tương đối: top-left, top-center, top-right, ...
    backgroundColor: "green", // Màu nền
    stopOnFocus: true, // Dừng hiển thị khi người dùng tập trung vào
  }).showToast();
};
function renderHeader(userLogin = null) {
  return `
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Cake Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="http://127.0.0.1:5500/">Home</a>
                        </li>
                      
                         <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="http://127.0.0.1:5500/">About</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="http://127.0.0.1:5500/">Contact Us</a>
                        </li>
                            <input class="form-control me-2 search_infor" type="search" placeholder="Search" aria-label="Search">
                            <button onclick="search()" class="btn btn-outline-success">Search</button>

                </div>
                
                ${
                  userLogin
                    ? ` ${userLogin.email}  
                      <form class="user-info" id="formAvatar">
      <img src="${userLogin.avatar}" class="img-avatar" onclick="changeAvatar()" id="img-avatar">
      <input type="file" class="input-file" id="input-file">
    </form>
  <a href="./cart/"> <i class="fa-solid fa-cart-shopping"></i></a>
                <span class="quantity">  </span>
                  <a href="../ClientOrderPage" class="clientPage">Your Orders</a>
   <button onclick="logout()" class="btn btn-primary">Log out</button>`
                    : ` <a href="/signin"><button class="btn btn-primary">Sign In</button></a>

                    <a href="/signup"><button class="btn btn-primary">Sign Up</button></a>`
                }

                     
                </div>
            </div>
        </nav>
    </header>
    `;
}

function renderFooter() {
  return `
    <!-- Footer -->
    <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <!-- Section: Social media -->
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          
            
        <!-- Section: Links  -->
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>Company name
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Angular</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">React</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Vue</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Laravel</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="#!" class="text-reset">Pricing</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Settings</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Orders</a>
                        </p>
                        <p>
                            <a href="#!" class="text-reset">Help</a>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            info@example.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Footer -->
    `;
}

function renderProduct() {
  let products = JSON.parse(localStorage.getItem("products"));

  return (products = products
    .map((product) => {
      return `
     <div class="grid-item">
        <img src="${product.productImage}"  class="product-image">
        <h3 class="product-name">${product.productName}</h3>
        <p class="product-price">${product.productPrice}</p>
        <button class="buy-now" onclick="buyNow(${product.productId})">Buy Now</button>
        <button class="add-to-cart" onclick="addToCart(${product.productId})">Add to Cart</button>
    </div>
  `;
    })
    .join(""));
}

function createToken(userLogin) {
  let dataJsonStr = JSON.stringify({
    userLogin,
    privateKey: "HieuJava",
  });
  let hashStr = ``;
  for (let i in dataJsonStr) {
    hashStr += dataJsonStr[i].charCodeAt(0) * 2 + "|";
  }
  return hashStr;
}

function decodeToken(token) {
  let baseStr = ``;
  for (let i in token.split("|")) {
    if (token.split("|")[i] == "") break;
    baseStr += String.fromCharCode(token.split("|")[i] / 2);
  }
  try {
    return JSON.parse(baseStr);
  } catch (err) {
    return false;
  }
}

function checkLogin() {
  if (localStorage.getItem("token")) {
    let tokenData = decodeToken(localStorage.getItem("token"));
    if (tokenData.privateKey != "HieuJava") {
      localStorage.removeItem("token");
      return null;
    }
    return tokenData.userLogin;
  } else {
    return null;
  }
  //so sanh voi private key, neu sai thi remove token do
  //neu dung thi tra lai data
}

function hashPassword(str) {
  str = `ascw@&$#*_${str}_(@#E(S))`;
  let hashStr = "";
  for (let i in str) {
    hashStr += str[i].charCodeAt(0);
  }
  return hashStr;
}

function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}

function changeAvatar() {
  let image = document.getElementById("input-file").files;
  console.log(image);
  return;
}
//---------------------------SEARCH-------------------------------

function search() {
  let products = JSON.parse(localStorage.getItem("products"));
  let searchInforEl = document.querySelector(".search_infor");

  if (searchInforEl.value == "") {
    renderProduct(products);
    return;
  } else {
    let result = [];
    for (let i in products) {
      if (
        format(products[i].productName).includes(format(searchInforEl.value))
      ) {
        result.push(products[i]);
      }
    }
    document.querySelector(".grid-container").innerHTML = result
        .map((product) => {
          return `
     <div class="grid-item">
        <img src="${product.productImage}"  class="product-image">
        <h3 class="product-name">${product.productName}</h3>
        <p class="product-price">${product.productPrice}</p>
        <button class="buy-now" onclick="buyNow(${product.productId})">Buy Now</button>
        <button class="add-to-cart" onclick="addToCart(${product.productId})">Add to Cart</button>
    </div>
  `;
        })
        .join("")
    
  }
}

function format(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}
