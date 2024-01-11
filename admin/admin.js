function addProduct(){
    let products = JSON.parse(localStorage.getItem("products")|| "[]")
    console.log(products);
}