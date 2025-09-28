document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";
// Oefening 3: Filter even getallen uit een array
// Schrijf een programma dat een array doorloopt en alle even getallen afdrukt.

let elementen=[5,6,8,11,50,1,3];
console.log(elementen[1]);

let even = 0
for (let element of elementen){
    if(elementen % 2 !== 0) {

        console.log(even);
    }
}
console.log(elementen);


// let even = []
//  for(let element of elementen) {
//      if (element % 2 !== 0) {
//          even = element
//      }
//  }

