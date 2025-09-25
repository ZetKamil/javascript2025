document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

// Oefening 1: Som van alle elementen in een array
// Schrijf een programma dat een array van getallen neemt en de som van alle getallen in de array berekent.

let elementen=[5,6,8,11,50,1,3];
let som = 0;

for(element of elementen){
    som = som + element;
}
alert(`De totale lengte is ${elementen.length}  land en de som  is ${som}`)

// let elementen=[5,6,8,11,50,1,3];
// let som = 0;
// let teller=0;
// for(element of elementen){
//     som = som + elementen[teller];
//     teller = teller+1;
// }
// alert(`De totale som van ${teller}  nummers is ${som}`)
