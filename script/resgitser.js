let fname= document.getElementById("fname")
let lname= document.getElementById("lname")
let email= document.getElementById("email")
let password= document.getElementById("pwd")
let registerBtn= document.getElementById("submit")

if (localStorage.getItem('rememberMe') === 'true') {
    email.value=localStorage.getItem("Email")
    password.value= localStorage.getItem("Password")
  }

registerBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(fname.value==="" || lname.value==="" || email.value==="" || password.value===""){
        alert("Please fill in data!")
    }
    else{

        localStorage.setItem("First-Name",fname.value.trim())
        localStorage.setItem("Last-Name",lname.value.trim())
        localStorage.setItem("Email",email.value.trim())
        localStorage.setItem("Password",password.value.trim())


    setTimeout(()=>{
        window.location= "login.html"
    },1000)

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
    password.type = 'password'; // Ensure the password field is masked
};