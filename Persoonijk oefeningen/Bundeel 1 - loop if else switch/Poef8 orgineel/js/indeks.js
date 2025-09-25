document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";


var som = 1
for(let teller=1;teller<=5;teller=teller+1)
{
    let getal=parseInt(window.prompt("Geef een getal in:"));
   som = som * getal
}
console.log(som);