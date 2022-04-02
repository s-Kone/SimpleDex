const xhttp = new XMLHttpRequest();

let confirmPassword = document.getElementById('confirmPassword').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let username = document.getElementById('username').value;


function postRegister(){
    resource = '/register';
    params = `username=${username}&email=${email}&password=${password}`;
    xhttp.open('POST', endPointRoot + resource, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(params);
    xhttp.onreadystatechange = function () {
        
    }
}
