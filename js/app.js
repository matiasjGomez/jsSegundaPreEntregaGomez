
//mold fot cart items
class Item {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const cart = []; //cart array, here we put all the purchased items

//items
const ztotk = new Item("The Legend of Zelda: Tears of the kingdom", 46000);
const diabloiv = new Item("Diablo IV", 46000);
const sfvi = new Item("Street Fighter 6", 46000);
const mk1 = new Item("Mortal Kombat 1", 46000);


//elemntens
const elementCart = document.querySelector("#cart");
const cartSub = document.querySelector("#subtotal_price");
cartSub.innerText = "0";


//functions
function buy(item) {
    cart.push(item);
    cartSub.innerText = parseInt(cartSub.innerText) + item.precio;
    renderHtml();
}

//cancel order
function cancel(indice) {
    const item = cart[indice]
    cartSub.innerText = parseInt(cartSub.innerText) - item.precio;
    cart.splice(indice, 1);
    renderHtml();
}


//render items for cart
function renderHtml() {
    elementCart.innerHTML = "";
    for (const item of cart) {
        let indexItem = cart.indexOf(item);
        let elementItem = `
        <div class="item">
        ${item.nombre} <span id="close_btn" class="close_btn cursor" onclick=cancel(${indexItem})>&times;</span>
        <p>$${item.precio}</p>
        </div>
    `;
    elementCart.innerHTML += elementItem;
    }
}

//checkout purchase

function confirmCheckout() {
    let checkout = confirm ("¿Desea continuar con la compra?");
    if (checkout) {
        alert("Compra realizada con éxito");
    } else {
        alert("Continua con la selección de productos");
    }
}


