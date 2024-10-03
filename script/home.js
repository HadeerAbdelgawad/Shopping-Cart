let userInfo = document.getElementById('user-info')
let userName = document.getElementById("user")
if(localStorage.getItem("First-Name")){
    userInfo.style.display="flex"
    userName.style.marginTop="6px"
    userName.style.textTransform= "capitalize"
    userName.style.textDecoration="none"
    userName.style.color="rgb(118, 154, 184)"
    userName.innerHTML = localStorage.getItem("First-Name")
}

let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    },1500)
})

///////////////////////////////////////////////////////////////////////

let allProducts= document.querySelector(".products")
let products=[
    {
        id:1,
        name:"Products: Leather Bag",
        img:"images/bag.jpg",
        desc:"Description: Women Fashion's",
        price: 50
    },
    {
        id:2,
        name:"Products: Bottle",
        img:"images/Bottle.jpg",
        desc:"Description: Supplies",
        price: 20
    },
    {
        id:3,
        name:"Products: Glasses",
        img:"images/Glasses.jpg",
        desc:"Description: Women Fashion's",
        price: 35
    },
    {
        id:4,
        name:"Products: Shoes",
        img:"images/Football (1).jpg",
        desc:"Description: Sport",
        price: 30
    },
    {
        id:5,
        name:"Products: Glass Cup",
        img:"images/Glass cup.jpg",
        desc:"Description: Home & Kitchen",
        price: 20
    },
    {
        id:6,
        name:"Products: Jacket",
        img:"images/Jacket.jpg",
        desc:"Description: Men Fashion's",
        price: 40
    },
    {
        id:7,
        name:"Products: Jacket",
        img:"images/Jacket1.jpg",
        desc:"Description: Men Fashion's",
        price: 40
    },
    {
        id:8,
        name:"Products: Glass Cup",
        img:"images/Glass cup.jpg",
        desc:"Description: Home & Kitchen",
        price: 20
    },
    {
        id:9,
        name:"Products: T-shirt",
        img:"images/product1.jpg",
        desc:"Description: Men Fashion's",
        price: 25
    },
    {
        id:10,
        name:"Products: Glass Cup",
        img:"images/Glass cup1.jpg",
        desc:"Description: Home & Kitchen",
        price: 24
    },
    {
        id:11,
        name:"Products: Air pods",
        img:"images/product2.jpg",
        desc:"Description: Electronics",
        price: 55
    },
    {
        id:12,
        name:"Products: Jacket",
        img:"images/product3.jpg",
        desc:"Description: Men Fashion's",
        price: 40
    },
    {
        id:13,
        name:"Products: Bottle",
        img:"images/product4.jpg",
        desc:"Description: Supplies",
        price: 20
    },
    {
        id:14,
        name:"Products: Glasses",
        img:"images/product5.jpg",
        desc:"Description: Men Fashion's",
        price: 27
    },
    {
        id:15,
        name:"Products: Cap",
        img:"images/product6.jpg",
        desc:"Description: Men Fashion's",
        price: 35
    },
    {
        id:16,
        name:"Products: Bag back",
        img:"images/product7.jpg",
        desc:"Description: Supplies",
        price: 55
    },
    {
        id:17,
        name:"Products: Shoes",
        img:"images/product8.jpg",
        desc:"Description: Men Fashion's",
        price: 59
    },
    {
        id:18,
        name:"Products: Bag",
        img:"images/product9.png",
        desc:"Description: Women Fashions",
        price: 30
    }
]


function drawItems(){
    allProducts.innerHTML = '';
    for(let i=0;i<products.length;i++){
        allProducts.innerHTML+=`
                    <div class="card col-lg-4 col-md-6 col-sm-12 mt-2 mb-3 ms-3 me-3" style="width:21rem">
                        <img class="card-img-top" src="${products[i].img}" alt="Card image" style="width:90%; margin: auto; height: 400px;">
                        <div class="card-body">
                          <h4 class="card-title">${products[i].name}</h4>
                          <p class="card-text">${products[i].desc}</p>
                          <p class="card-text">Price: ${products[i].price}$</p>
                          <a href="#" class="btn btn-primary" onClick='addToCart(${i})'>Add to cart</a>
                        </div>
                    </div>
        `
    }
}
drawItems()

////////////////////////////////////////////////////////////////////



function addToCart(index) {
    let cart= JSON.parse(localStorage.getItem('cart')) || []
    const selectedProduct= products[index]
    let existingProduct= cart.find(item=> item.id === selectedProduct.id)


    if (existingProduct) {
        existingProduct.quantity += 1;

    } else {
        cart.push({...selectedProduct, quantity: 1});
    }


    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart();
}

// /////////////////////////////////////////////////////////////////////////////////

function updateCart(){
    let cartItem= document.getElementById('cartItem')
    let cart= JSON.parse(localStorage.getItem('cart')) || []
    let totalPrice=0
    let totalItem=0

    cartItem.innerHTML=""

    if (cart.length === 0) {
        cartItem.innerHTML = `
        <div>
            <p>Your Cart is Empty</p>
            <div class="foot">
                <h3>Total</h3>
                <h2 id="total">0.00$ </h2>
            </div>
        </div>`;
    }

    else{
    cart.forEach(item=>{
        totalItem+=item.quantity
        totalPrice += item.price *item.quantity

        cartItem.innerHTML +=`
        <div class="cartItem">
                <div class='row-img'>
                    <img class='rowimg rounded-pill' src="${item.img}" alt="${item.name}">
                </div>
                <p>${item.name} (x${item.quantity})</p>
                <h2 style='font-size:15px'>$ ${(item.price * item.quantity).toFixed(2)}</h2>
                <i class="fas fa-trash-alt trash" onClick='removeFromCart(${item.id})' style='cursor:pointer'></i>
        </div>
        
        `
    })

    cartItem.innerHTML+=`
    <div style='padding:10px'>
        <button type="button" class="btn btn-secondary btn-block" style='width:100%;'><a href="cartProducts.html" style="text-decoration:none; color:white" >View Product Cart</a></button>
    </div>
    
    <div class="foot">
            <h3>Total</h3>
            <h2 id="total">${totalPrice}$</h2>
        </div>  
    `
}

    document.getElementById('total').innerText = `${totalPrice.toFixed(2)}$`;
    document.getElementById('badge').innerHTML = totalItem
}

////////////////////////////////////////////////////////////////////////////////
        
function removeFromCart(id){
    let cart= JSON.parse(localStorage.getItem('cart')) || []

    cart= cart.filter(item =>item.id !==id)

    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
}


function preventBack(){
    window.history.forward()
}
setTimeout("preventBack(),0")
window.onunload= function(){null}


window.onload = function() {
    updateCart();
}
