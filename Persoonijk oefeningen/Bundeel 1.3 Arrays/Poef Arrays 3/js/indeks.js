document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

// Oefening 3: Filter even getallen uit een array
// Schrijf een programma dat een array doorloopt en alle even getallen afdrukt.


let elementen=[5,6,8,11,50,1,3];
let even = 0
for(let element of elementen) {
    even = element % elementen == 0
}
console.log(`even getalen zijn ${even}');

/*
// let elementen=[5,6,8,11,50,1,3];
// let som = 0;
// let teller=0;
// for(element of elementen){
//     som = som + elementen[teller];
//     teller = teller+1;
// }