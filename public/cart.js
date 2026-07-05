let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

let cartList =
document.getElementById("cartItems");

cart.forEach(item => {

    let li =
    document.createElement("li");

    li.textContent = item;

    cartList.appendChild(li);

});