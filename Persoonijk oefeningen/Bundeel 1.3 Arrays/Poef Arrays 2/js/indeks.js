document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

// Oefening 2: Grootste getal in een array vinden
// Schrijf een programma dat het grootste getal in een array van getallen vindt.

let elementen=[5,6,8,11,50,1,3];
let hoogste = 0
for(let element of elementen) {
    if (hoogste < element) {
        hoogste = element;
    }
}
console.log(`Hoogste element  is ${hoogste}`);

// let elementen=[5,6,8,11,50,1,3];
// let som = 0;
// let teller=0;
// for(element of elementen){
//     som = som + elementen[teller];
//     teller = teller+1;
// }
// alert(`De totale som van ${teller}  nummers is ${som}`)
