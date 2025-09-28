document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

var hoeveel = parseFloat(window.prompt("Hoeveel sterren wil jij zien?"));
console.log(`Jij wenst ${hoeveel} sterren.`);

var star= "*"
var star2   = "*"

for(let a =0; a <hoeveel; a++) {
    console.log(star)
    star = star + "*";
}
for(let b= hoeveel; b>=1;b--){
    console.log(star2)
    star2 = star2 + "*";
    console.log(b);
}