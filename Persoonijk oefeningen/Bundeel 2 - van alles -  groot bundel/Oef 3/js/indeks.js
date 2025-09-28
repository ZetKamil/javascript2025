document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

var geborteJaar = parseInt(window.prompt("Wanner ben jij geboren?"));

var hudigJaar = parseInt(window.prompt("Welke jaar is het?"));

if( (hudigJaar - geborteJaar) >= 18){
    alert("Jij kan besslisen over je zelf");
}else{
    alert("Gelukkig heb jij nog oders die alles regelen")
}



