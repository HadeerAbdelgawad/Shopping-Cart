let email= document.getElementById("email")
let password= document.getElementById("pwd")

let loginBtn= document.getElementById("submit")


let getEmail= localStorage.getItem('Email')
let getPassword= localStorage.getItem('Password')

loginBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(email.value==="" || password.value===""){
        alert("Fill in data!")
    } else{
        localStorage.setItem('log', 'true')
        if((getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword.trim()=== password.value.trim()))
            {
            setTimeout(()=>{
                window.location= "home.html"
            },1000)
            }else{
                alert("Email Address or password is wrong")
            }
    }
    
})


function showPassword(){
    const showPass= document.getElementById('showPass')

    if(password.type==='password'){
        password.type='text'
        showPass.classList.remove('fa-eye')
        showPass.classList.add('fa-eye-slash')

    }else{
        password.type='password'
        showPass.classList.remove('fa-eye-slash')
        showPass.classList.add('fa-eye')
    }
}

function preventBack(){
    window.history.forward()
}
setTimeout("preventBack(),0")
window.onunload= function(){null}

window.onload = function() {
    password.type = 'password'; 
};