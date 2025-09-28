document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

var hoeveel = parseFloat(window.prompt("Hoeveel sterren wil jij zien?"));
console.log(`Jij wenst ${hoeveel} sterren.`);

var star= "*"

for(let a =0; a <hoeveel; a++){
   console.log(star)
   star = star + "*";

}
