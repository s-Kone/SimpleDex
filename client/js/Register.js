let input = document.getElementById('input').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;


function onRegister(){
    if(password != input){
        window.alert("Passwords don't match");
    }
}