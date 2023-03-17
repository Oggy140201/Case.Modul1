// Modal: phương thức
let modal = document.getElementById("myModal");
let btn = document.getElementById("cart");
let close = document.getElementsByClassName("close")[0];
let close_footer = document.getElementsByClassName("close-footer")[0];
let order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
close_footer.onclick = function () {
    modal.style.display = "none";
}
order.onclick = function () {
    alert("Cảm ơn bạn đã thanh toán đơn hàng");
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// xóa cart
let remove_cart = document.getElementsByClassName("btn-danger");
for (let i = 0; i < remove_cart.length; i++) {
    let button = remove_cart[i];
    button.addEventListener("click", function () {
        let button_remove = event.target;
        button_remove.parentElement.parentElement.remove();
        updatecart();
    })
}

// thay đổi số lượng
let quantity_input = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantity_input.length; i++) {
    let input = quantity_input[i];
    input.addEventListener("change", function (event) {
        let input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart()
    })
}

// Thêm vào giỏ
let add_cart = document.getElementsByClassName("btn-cart");
for (let i = 0; i < add_cart.length; i++) {
    let add = add_cart[i];
    add.addEventListener("click", function (event) {

        let button = event.target;
        // let document = button.parentElement.parentElement;
        let product = button.parentElement.parentElement;
        // console.log(product)
        console.log(document.getElementsByClassName("img-prd"))
        let img = document.getElementsByClassName("img-prd")[i].src
        let title = document.getElementsByClassName("content-product-h3")[i].innerText
        let price = document.getElementsByClassName("price")[i].innerText
        addItemToCart(title, price, img)
        // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
        modal.style.display = "block"

        updatecart();
    })
}
// sẽ hiển thị sản phẩm khi thêm vào giỏ hàng
function addItemToCart(title, price, img) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cart_title = cartItems.getElementsByClassName('cart-item-title');
    for (let i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText == title) {
            alert('Sản Phẩm Đã Có Trong Giỏ Hàng');
            return;
        }
    }

    let cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1" style="font-size: 30px">
      <button class="btn btn-danger" type="button" style="font-size: 30px">Xóa</button>
  </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
        let button_remove = event.target;
        button_remove.parentElement.parentElement.remove();
        updatecart();
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        let input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart();
    })
}
// cập nhật giỏ hàng
 function updatecart() {
     let cart_item = document.getElementsByClassName("cart-items")[0];
     let cart_rows = cart_item.getElementsByClassName("cart-row");
     let total = 0;
    for (let i = 0; i < cart_rows.length; i++) {
        let cart_row = cart_rows[i];
        let price_item = cart_row.getElementsByClassName("cart-price ")[i];
        let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[i];
         let price = parseFloat(price_item.innerText);
         let quantity = quantity_item.value;
         total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[i].innerText = total + 'VNĐ';
}
// menu mobile
 let btn_menu = document.getElementById("btnmenu");
 btn_menu.addEventListener("click", function () {
     let item_menu = document.getElementById("menutop");
     if (item_menu.style.display === "block") {
         item_menu.style.display = "none";
     } else {
         item_menu.style.display = "block";
     }
 })