document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

let geborteJaar = parseFloat(window.prompt("Wanner ben jij geboren?"));

let hudigJaar = parseFloat(window.prompt("Welke jaar is het?"));

let leefTijd =  hudigJaar - geborteJaar

console.log(`Jij bent ${hudigJaar - geborteJaar}`)

if ((leefTijd) >= 18){
    console.log("Jij kan besslisen over je zelf");

} if ((leefTijd) >= 1){
    console.log("Gelukkig heb jij nog ouders die alles regelen");

}else {
    console.log("Datum is slecht, jij kan niet jonger dan 0 jaar zijn");
}


