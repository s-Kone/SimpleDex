const xhttp = new XMLHttpRequest();
const endPointRoot = "https://alexgiasson.me/comp4537/termproject/api/v1/";

function getPokemon() {
    let p = document.getElementById("pokemon").value;
    let params = 'searchPokemon/?pokemon=' + p;
    let url = endPointRoot + params;
    xhttp.open("GET", url, true);
    xhttp.send(url);
    console.log(url);
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("searchResult").innerHTML = this.responseText;

        }
    }
}

// function postTeam() {
//     let tn = document.getElementById("teamName").value;
//     let t1 = document.getElementById("pokemon1").value;
//     let t2 = document.getElementById("pokemon2").value;
//     let t3 = document.getElementById("pokemon3").value;
//     let t4 = document.getElementById("pokemon4").value;
//     let t5 = document.getElementById("pokemon5").value;
//     let params = 'postTeam/?teamname=' + tn + '&pokemon1=' + t1 + '&pokemon2=' + t2 + '&pokemon3=' + t3 + '&pokemon4=' + t4 + '&pokemon5=' + t5;
//     let url = endPointRoot + params;
//     console.log(url);
//     let obj = {teamname: tn, pokemon1: t1, pokemon2: t2, pokemon3: t3, pokemon4: t4, pokemon5: t5}
//     let data = JSON.stringify(obj);
//     xhttp.open("POST", url, true);
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhttp.send(data);
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             console.log(this.responseText);
//         }
//     }
// }

function getTeam() {
    let TID = document.getElementById("teamID").value;
    let PID = document.getElementById("pokemonID").value;
    let params = 'postTeam/?teamID=' + TID + '&pokemonID=' + PID;
    let url = endPointRoot + params;
    xhttp.open("GET", url, true);
    xhttp.send(url);
    console.log(url);
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("getTeamResult").innerHTML = this.responseText;
        }
    }
}