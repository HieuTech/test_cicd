products = [
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




  document
    .getElementById("root")
    .insertAdjacentHTML("afterbegin", renderHeader(checkLogin()));

document.querySelector(".grid-container").innerHTML = renderProduct(products);

document.getElementById("root").insertAdjacentHTML("beforeend", renderFooter());

