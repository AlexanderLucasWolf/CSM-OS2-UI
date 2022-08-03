setInterval(myTimer, 100);
setInterval(myTimer2, 100);
var test = false;
var inhalt = 20;

function runden(eingabe){
    var numb= eingabe;
var rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
return rounded
}

function myTimer2() {
    if (Math.floor(Math.random() * 2) == 1){
    inhalt = inhalt + ( Math.floor(Math.random() * 10)*0.001);
}

    else{
        inhalt = inhalt - ( Math.floor(Math.random() * 10)*0.001);
    }
    inhalt = runden(inhalt);
    document.getElementById("Messwert_1").innerHTML = inhalt;
}

function myTimer() {
    if (test == false){
    document.getElementById("punkt_sensor_1").style.backgroundColor = "#c3ff00";
    test = true;
}
else {
    document.getElementById("punkt_sensor_1").style.backgroundColor = "#ff4141";
    test = false;  
}}

