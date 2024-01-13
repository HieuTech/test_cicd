let products = [
  {
    productId: Math.ceil(Math.random() * Date.now()),
    productName: "Cake",
    productPrice: "200.000 VND",
    quantity: 1,
    productImage:
      "https://images.unsplash.com/photo-1559735614-e35ef860a156?q=80&w=1598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: Math.ceil(Math.random() * Date.now()),
    productName: "Banana Cake",
    productPrice: "600.000 VND",
    quantity: 1,
    productImage:
      "https://images.unsplash.com/photo-1560156710-0580247f9f69?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: Math.ceil(Math.random() * Date.now()),
    productName: "Apple Cake",
    productPrice: "400.000 VND",
    quantity: 1,
    productImage:
      "https://images.unsplash.com/photo-1508736375612-66c03035c629?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: Math.ceil(Math.random() * Date.now()),
    productName: "Coconut Cake",
    productPrice: "200.000 VND",
    quantity: 1,
    productImage:
      "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: Math.ceil(Math.random() * Date.now()),
    productName: "SweetCake",
    productPrice: "550.000 VND",
    quantity: 1,
    productImage:
      "https://media.istockphoto.com/id/1292539369/vi/anh/b%C3%A1nh-m%E1%BB%9Bi-n%C6%B0%E1%BB%9Bng-v%E1%BB%9Bi-nho-kh%C3%B4-m%C6%A1-kh%C3%B4-anh-%C4%91%C3%A0o-kh%C3%B4-kiwi-v%C3%A0-nam-vi%E1%BB%87t-qu%E1%BA%A5t-v%C3%A0-%C4%91%C3%B3ng-b%C4%83ng-c%E1%BA%ADn-c%E1%BA%A3nh-tr%C3%AAn.jpg?s=1024x1024&w=is&k=20&c=oQSzYkH6LW1iRJVHQzhArtMpnZp6bjCU90R7plEBXPw=",
  },
  {
    productId: Math.ceil(Math.random() * Date.now()),
    productName: "CriosSum",
    productPrice: "340.000 VND",
    quantity: 1,
    productImage:
      "https://media.istockphoto.com/id/513649485/vi/anh/b%C3%A1nh-tr%C3%A1i-c%C3%A2y-gi%C3%A1ng-sinh.jpg?s=1024x1024&w=is&k=20&c=9dCRGsb_zkN8pPb4bzh5KKRYwNbTsBrbw6x5OK_fB7A=",
  },
  {
    productId: Math.ceil(Math.random() * Date.now()),
    productName: "Cake Birthday",
    productPrice: "140.000 VND",
    quantity: 1,
    productImage:
      "https://media.istockphoto.com/id/184597781/vi/anh/b%C3%A1nh-tr%C3%A1i-c%C3%A2y-v%C3%A0o-gi%C3%A1ng-sinh.jpg?s=1024x1024&w=is&k=20&c=pzWmagjrSnnYIvi8RDpWx6Ob_M_eqX4Dw6s8HBCPbm8=",
  },
  {
    productId: Math.ceil(Math.random() * Date.now()),
    productName: "Wedding",
    productPrice: "100.000 VND",
    quantity: 1,
    productImage:
      "https://images.unsplash.com/photo-1541491008689-b5d3c6615e2e?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}
// --------------------PRODUCT-------------
function renderProductAdmin(products) {
  let showTableData = ``;
  for (let i in products) {
    showTableData += `
        <tr class="product-row">
          <td class="product-id">${products[i].productId}</td>

  <td class="product-image">
    <img src="${products[i].productImage}" alt="Sản phẩm 1" />
  </td>
  <td class="product-name">${products[i].productName}</td>
  <td class="product-price">${products[i].productPrice}</td>
  <td class="product-quantity">
    <input type="number" value="${products[i].quantity}" />
  </td>
   <td class="product-update">
    <button class="btn btn-add" onclick="addProduct()">
      Add Product
    </button>
  </td>
  <td class="product-update">
    <button class="btn btn-update" onclick="updateProduct(${products[i].productId})">
      Edit Product
    </button>
  </td>
 
  <td class="product-delete">
    <button class="btn btn-delete" onclick="deleteProduct(${products[i].productId})">
      Delete Product
    </button>
  </td>
</tr>`;
  }

  document.getElementById("tableProduct").innerHTML = showTableData;
}

function addProduct() {
  let productName = prompt("Nhap Product Name");
  let productImage = prompt("Nhap Product Image");
  let productPrice = prompt("Nhap Product Price");
  let quantity = prompt("Nhap Product Quantity");

  let products = JSON.parse(localStorage.getItem("products") || "[]");
  let product = {
    productId: Math.ceil(Math.random() * Date.now()),
    productImage,
    productName,
    productPrice,
    quantity,
  };

  products = [...products, product];
  localStorage.setItem("products", JSON.stringify(products));

  renderProductAdmin(products);
}

function updateProduct(id) {
  let products = JSON.parse(localStorage.getItem("products") || "[]");
  let product = products.find((product) => product.productId == id);

  product.productImage = prompt("Nhap Product Image");
  product.productName = prompt("Nhap Product Name");
  product.productPrice = prompt("Nhap Product Price");
  product.quantity = prompt("Nhap Product Quantity");

  localStorage.setItem("products", JSON.stringify(products));
  renderProductAdmin(products);
}
function deleteProduct(id) {
  if (!confirm("Are you sure?")) {
    return;
  }
  let products = JSON.parse(localStorage.getItem("products") || "[]");
  products = products.filter((product) => product.productId != id);

  localStorage.setItem("products", JSON.stringify(products));
  renderProductAdmin(products);
}

// --------------------ORDERS-------------

function renderOrderAdmin() {
  let orders = JSON.parse(localStorage.getItem("orders"));

  let showTableData = ``;
  for (let i in orders) {
    showTableData += `
        <tr class="product-row">
          <td class="product-id">${orders[i].orderId}</td>

      <td class="product-name">${orders[i].name}</td>

  <td class="product-name">${orders[i].phone}</td>
  <td class="product-price">${orders[i].address}</td>
  <td class="product-quantity">${orders[i].createAt} </td>
  <td class="product-quantity">${orders[i].payment} </td>
  <td class="product-quantity">${orders[i].note} </td>
  <td class="order-status">${orders[i].status} </td>
  <td class="product-quantity">
  <form onsubmit="checkOrder(event,${orders[i].orderId})">
  <input type="radio" id="Approved" name="orderStatus" value="Approved">
  <label for="Approved">Approved</label><br>
  <input type="radio" id="Disapproved" name="orderStatus" value="Disapproved">
  <label for="Disapproved">Disapproved</label>
<button type="submit" >Confirm</button>
</form>
  </td>
  
</tr>`;
  }

  document.getElementById("tableOrder").innerHTML = showTableData;
}

function checkOrder(e, orderId) {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let orders = JSON.parse(localStorage.getItem("orders"));
  let tokenData = decodeToken(localStorage.getItem("token"));

  let selectedValue = document.querySelector(
    'input[name="orderStatus"]:checked'
  ).value;

  orders.forEach((order) => {
    if (order.orderId == orderId) {
      if (selectedValue == "Approved") {
        orders.forEach((order) => {
          order.status = true;
          document.querySelector(".order-status").innerHTML = order.status;
        });
        localStorage.setItem("orders", JSON.stringify(orders));

        users.forEach((user) => {
          if (user.email == tokenData.userLogin.email) {
            user.orders.forEach((order) => {
              order.status = true;
            });
          }
        });
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        orders.forEach((order) => {
          order.status = false;
          document.querySelector(".order-status").innerHTML = order.status;
        });
        localStorage.setItem("orders", JSON.stringify(orders));
        users.forEach((user) => {
          if (user.email == tokenData.userLogin.email) {
            user.orders.forEach((order) => {
              order.status = true;
            });
          }
        });
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  });
}

// --------------------------------------------USERS------------------------------

function renderUserAdmin() {
  let users = JSON.parse(localStorage.getItem("users"));
  let showTableData = ``;
  for (let i in users) {
    showTableData += `
        <tr class="product-row">
          <td class="product-id">${users[i].id}</td>

      <td class="product-name">${users[i].email}</td>

  <td class="product-name">${users[i].password}</td>
  <td class="product-price"><button onclick=detailOrder(${users[i].id})>Detail Order</button></td>
  <td class="product-price" >
  <button onclick=deleteUser(${users[i].id})>Delete User</button></td>
  
</tr>`;
  }

  document.getElementById("tableUser").innerHTML = showTableData;
}

// --------------------------------------------CHECK_USERS_ORDERS------------------------------
function detailOrder(id) {
  document.querySelector(".order_container").style.display = "none";
  document.querySelector(".product_container").style.display = "none";
  document.querySelector(".user_container").style.display = "none";
  document.querySelector(".orderDetail_container").style.display = "block";
}

// --------------------------------------------DELETEUSER------------------------------

function deleteUser(id) {
  if (
    !confirm("!!!!IF YOU DELETE USER, ALL OF DATAS OF THEM WILL BE LOST!!!!!!")
  )
    return;
  let users = JSON.parse(localStorage.getItem("users"));

  users = users.filter((user) => user.id != id);
  localStorage.setItem("users", JSON.stringify(users));

  renderUserAdmin();
}

// --------------------------------------------RENDERPAGE------------------------------
function clickOrder(order) {
  renderOrderAdmin();
  document.querySelector(".order_container").style.display = "block";
  document.querySelector(".product_container").style.display = "none";
  document.querySelector(".user_container").style.display = "none";
}
function clickProduct(product) {
  renderProductAdmin(JSON.parse(localStorage.getItem("products")));
  document.querySelector(".product_container").style.display = "block";

  document.querySelector(".order_container").style.display = "none";
  document.querySelector(".user_container").style.display = "none";
}
function clickUser() {
  renderUserAdmin();

  document.querySelector(".user_container").style.display = "block";
  document.querySelector(".product_container").style.display = "none";
  document.querySelector(".order_container").style.display = "none";
}
function clickDashboard(dashboard) {
  //   clickRender(
  //     dashboard,
  //     ".user_container",
  //     ".product_container",
  //     "order_container",
  //     "block",
  //   );
}

function clickRender(dashboard, user, order, product) {
  let arrayRender = [dashboard, user, order, product];
  arrayRender.forEach((item) => {
    console.log(item);
  });
  return;

  if (dashboard == ".dashboard_container") {
    document.querySelector(dashboard).style.display = "block";
  } else {
    document.querySelector(user).style.display = "none";
    document.querySelector(order).style.display = "none";
    document.querySelector(product).style.display = "none";
  }

  document.querySelector(dashboard).style.display = "block";
  document.querySelector(user).style.display = "none";
  document.querySelector(order).style.display = "none";
  document.querySelector(product).style.display = "none";
}

// ------------------------TOGGLESIDEBAR_------------------------------------
function toggleSidebar() {
  var sidebar = document.querySelector(".sidebar");
  var mainContent = document.querySelector(".main-content");
  var btn = document.querySelector(".btnToggleSidebar");
  var arrowLeft = document.querySelector(".fa-arrow-left");
  var arrowRight = document.querySelector(".fa-arrow-right");
  if (sidebar.style.left === "0px" || sidebar.style.left === "") {
    sidebar.style.left = "-250px"; // Hide the sidebar
    mainContent.style.marginLeft = "0";

    btn.style.marginLeft = "0";
  } else {
    sidebar.style.left = "0"; // Show the sidebar
    mainContent.style.marginLeft = "250px";
    btn.style.marginLeft = "250px";
  }
}

// ------------------------IFADMINACCOUNT------------------------------------
