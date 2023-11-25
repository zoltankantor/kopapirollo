
var displayResults = false;
var ko;
var papir;
var ollo;
var sajatKo;
var sajatPapir;
var sajatOllo;
var resultLabel;

function init(){
    ko = document.querySelector('#ko');
    papir = document.querySelector("#papir");
    ollo = document.querySelector("#ollo");
    sajatKo = document.querySelector('#sajatKo');
    sajatPapir = document.querySelector("#sajatPapir");
    sajatOllo = document.querySelector("#sajatOllo");
    resultLabel = document.querySelector("h1");
}

function restart(){
    ko.style.visibility = "hidden";
    papir.style.visibility = "hidden";
    ollo.style.visibility = "hidden";
    resultLabel.innerHTML = "";
    sajatKo.style.border = "none";
    sajatPapir.style.border = "none";
    sajatOllo.style.border = "none";
    displayResults = false;
}

function pick(choice){
    if(!displayResults){
        var botNum = getRandomInt(1,3);
        var botPick = "";
        switch(botNum){
            case 1 : botPick = "ko"; break;
            case 2 : botPick = "papir"; break;
            case 3 : botPick = "ollo"; break;
            default : console.log("error");
        }
        console.log(choice)
        console.log(botPick)
        switch(botPick){
            case "ko" : {
                if(choice == "papir") {
                    resultLabel.innerHTML = "Nyertél!! :)";
                    resultLabel.className = "result-won"
                    sajatPapir.style.border = "thick solid green";
                }
                else if(choice == "ko") {
                    resultLabel.innerHTML = "Döntetlen! :|";
                    resultLabel.className = "result-x"
                    sajatKo.style.border = "thick solid yellow";
                }
                else {
                    resultLabel.innerHTML = "Vesztettél! :(";
                    resultLabel.className = "result-lost"
                    sajatOllo.style.border = "thick solid red";
                }
                ko.style.visibility = "visible";
                displayResults = true;
                break;
            }
            case "papir" : {
                if(choice == "ollo") {
                    resultLabel.innerHTML = "Nyertél!! :)";
                    resultLabel.className = "result-won"
                    sajatOllo.style.border = "thick solid green";
                }
                else if(choice == "papir") {
                    resultLabel.innerHTML = "Döntetlen! :|";
                    resultLabel.className = "result-x"
                    sajatPapir.style.border = "thick solid yellow";
                }
                else {
                    resultLabel.innerHTML = "Vesztettél! :(";
                    resultLabel.className = "result-lost"
                    sajatKo.style.border = "thick solid red";
                }
                papir.style.visibility = "visible";
                displayResults = true;
                break;
            }
            case "ollo" : {
                if(choice == "ko") {
                    resultLabel.innerHTML = "Nyertél!! :)";
                    resultLabel.className = "result-won"
                    sajatKo.style.border = "thick solid green";
                }
                else if(choice == "ollo") {
                    resultLabel.innerHTML = "Döntetlen! :|";
                    resultLabel.className = "result-x"
                    sajatOllo.style.border = "thick solid yellow";
                }
                else {
                    resultLabel.innerHTML = "Vesztettél! :(";
                    resultLabel.className = "result-lost"
                    sajatPapir.style.border = "thick solid red";
                }
                ollo.style.visibility = "visible";
                displayResults = true;
                break;
            }
            default : displayResults = false;

        }
        resultLabel.style.visibility = displayResults ? "visible" : "hidden";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }