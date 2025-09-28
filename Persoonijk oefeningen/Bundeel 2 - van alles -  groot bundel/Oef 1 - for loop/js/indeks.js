document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

let hoeveel = parseFloat(window.prompt("Hoeveel getalen wil jij geven?"));
console.log(`Jij wenst ${hoeveel} getalen.`);
let som = 0
for(let a=0; a < hoeveel;a++) {
    let getal = parseInt(window.prompt(`Wat is het getal ${a+1}?`));
    console.log(getal)
    som +=getal;
}
console.log(` De totale som van ${hoeveel} getalen is: ` + som);
