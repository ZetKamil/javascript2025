document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";


var resultat = "";
for(let a= 1; a <=30;a++) {
    if (a % 3 == 0) {
        if (a == 30) {
            resultat = resultat + a
        } else {
            resultat = resultat + a + ","
        }
    }
}
console.log(resultat);

// slecht
// for(let a= 1; a <=30;a++){
//     if (a%3==0) {
//         console.log(a, a+3, a+6, a+9, a+12, a+15, a+18, a+21, a+24, a+27);
//     }
// }

