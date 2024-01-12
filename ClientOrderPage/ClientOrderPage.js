function renderOrderClient() {
  let orders = JSON.parse(localStorage.getItem("orders"));
  
  console.log(orders);
  let showTableData = ``;
  for (let i in orders) {
    showTableData += `
        <tr class="product-row">
         

      <td class="product-name">${orders[i].name}</td>

  <td class="product-name">${orders[i].phone}</td>
  <td class="product-price">${orders[i].address}</td>
  <td class="product-quantity">${orders[i].createAt} </td>
  <td class="product-quantity">${orders[i].payment} </td>
  <td class="product-quantity">${orders[i].note} </td>
  <td class="product-quantity">
        <p class="status">Pending...</p>
  </td>
  
</tr>`;
  }

  document.getElementById("tableOrder").innerHTML = showTableData;
}
renderOrderClient()