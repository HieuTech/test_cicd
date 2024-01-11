







function addProduct(){
    let products = JSON.parse(localStorage.getItem("products")|| "[]")
    console.log(products);
    return
}






function renderProductAdmin(){
    let products = JSON.parse(localStorage.getItem("products") || "[]");
    let showTableData = ``;
    for(let i in products){
         showTableData += `
        <tr class="product-row">
  <td class="product-image">
    <img src="${products[i].productImage}" alt="Sản phẩm 1" />
  </td>
  <td class="product-name">${products[i].productName}</td>
  <td class="product-price">${products[i].productPrice}</td>
  <td class="product-quantity">
    <input type="number" value="${products[i].quantity}" />
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
    document.getElementById("tableBody").innerHTML = showTableData;
    // document.querySelector(".grid-container").innerHTML =
    //   "hello"


}
renderProductAdmin()
