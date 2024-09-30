window.onload = function() {
    updateCart()
};




function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(item => item.id !== id);

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart()
    // Call the function to update the cart display
    // window.onload(removeFromCart());
}


function updateCart(){
    let cartContainer = document.querySelector('.cartContainer');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total=0

    cartContainer.innerHTML=''

    if (cart.length === 0) {
        cartContainer.innerHTML = `
        <div>
            <h2 style='color:red; display:flex; justify-content:center; align-items:center'>Your cart is empty.</h2>    
            <div style='justify-content: space-between; border-top: 1px solid #333; text-align:center'>
                <h3>Total</h3>
                <h2 id="total">0.00$ </h2>
            </div>
        </div>`

    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            cartContainer.innerHTML += `
        
                <div class="card col-lg-4 col-md-6 col-sm-12 mt-2 mb-3 ms-3 me-3" style="width:21rem">
                    <img class="card-img-top" src="${item.img}" alt="Card image" style="width:90%; margin: auto; height: 400px;">
                    <div class="card-body">
                        <h4 class="card-title">${item.name}</h4>
                        <p class="card-text">${item.desc}</p>
                        <p class="card-text">Price: ${item.price}$</p>
                        <p class="card-text">Quantity: ${item.quantity}</p>
                        <a href="#" class="btn btn-danger" onClick='removeFromCart(${item.id})'>Remove From Cart</a>
                    </div>
                </div>
                
            `
        });
        cartContainer.innerHTML +=`    
        <div>
            <div style='justify-content: space-between; border-top: 1px solid #333; text-align:center'>
                <h3>Total</h3>
                <h2 id="total">$${total.toFixed(2)}</h2>
            </div>
        </div>`
    
    }
}

// ///////////////////////////////////

