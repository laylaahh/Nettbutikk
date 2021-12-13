
let count = 0;
const add_cart = document.getElementsByClassName('add_cart');
for (let i = 0; i < add_cart.length; i++) {
    add_cart[i].addEventListener("click", redirect);
}

function redirect(event) {
    count++;
    counter.innerText = count;
}

