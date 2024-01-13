function renderOrderClient() {
  let users = JSON.parse(localStorage.getItem("users"));
  let showTableData = ``;

  users.forEach((user) => {
    for (let i in user.orders) {
      console.log(user.orders);
      // return

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
  });
    
  document.getElementById("tableOrder").innerHTML = showTableData;
}
renderOrderClient();


function renderOrderStatus(){
    let orders = JSON.parse(localStorage.getItem("orders"));

    orders.forEach((order) => {
      let statusElement = document.querySelector(".status");
      if (order.status) {
        statusElement.innerHTML = ` Checked`;
      } else {
        statusElement.innerHTML = "Disapproved!";
      }
    });
}
renderOrderStatus();
