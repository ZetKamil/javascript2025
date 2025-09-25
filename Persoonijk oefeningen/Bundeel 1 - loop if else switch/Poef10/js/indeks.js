document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";


var resultat = "";
let getal = parseInt(window.prompt("Wat is het getaal?"));
for(let a= 1; a<=81;a++) {
    if (a % getal == 0) {
        if (a == 9) {
            resultat = resultat + a
        } else {
            resultat = resultat + a + ", "
        }
    }
}
console.log(resultat);



// var resultat = " "
//
// let getal = parseInt(window.prompt("Wat is het getaal?"));
//
// for(let a=1;a<=10;a=a*{getal}) {
//
//      {
//          console.log(getal*getal);
//     }
// }

// console.log(getal*1);
// console.log(getal*2);
// console.log(getal*3);
// console.log(getal*4);
// console.log(getal*5);
// console.log(getal*6);
// console.log(getal*7);
// console.log(getal*8);
// console.log(getal*9);
// console.log(getal*10);