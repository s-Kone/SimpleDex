const xhttp = new XMLHttpRequest();
const endPointRoot = "https://alexgiasson.me/comp4537/termproject/api/v1/admin/";

function getADLogin() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;
    let params = '?username=' + u + '&password=' + p;
    let url = endPointRoot + params;
    xhttp.open("GET", url, true);
    xhttp.send(url);
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('adminStats').innerHTML = this.responseText;
        }
    }
}

function onRegister() {
    
}

function onUserLogin() {
    
}