function renderOrderClient() {
  let users = JSON.parse(localStorage.getItem("users"));
  let showTableData = ``;
  let tokenData = decodeToken(localStorage.getItem("token"));

  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      // console.log(user.orders);
      // return
      for (let i in user.orders) {
        showTableData += `
        <tr class="product-row">
      <td class="product-name">${user.orders[i].name}</td>
  <td class="product-name">${user.orders[i].phone}</td>
  <td class="product-price">${user.orders[i].address}</td>
  <td class="product-quantity">${user.orders[i].createAt} </td>
  <td class="product-quantity">${user.orders[i].payment} </td>
  <td class="product-quantity">${user.orders[i].note} </td>
  <td class="status">Pending...</td>
</tr>`;
      }
    }
  });

  document.getElementById("tableOrder").innerHTML = showTableData;
}
renderOrderClient();

function renderOrderStatus() {
  let tokenData = decodeToken(localStorage.getItem("token"));
  let users = JSON.parse(localStorage.getItem("users") || "[]");


  users.forEach((user) => {
    if (user.email == tokenData.userLogin.email) {
      user.orders.forEach((order) => {
        
      console.log(order.status);
      return
      });
 

    }
    // document.querySelector(".status").innerHTML = ;
  });
  localStorage.setItem("users", JSON.stringify(users));
}
renderOrderStatus();
