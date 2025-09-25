document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

let getal = parseInt(window.prompt("Geef een getal:"))
for(let a=1; a <=getal; a++) {
    if (a % 5 == 0){
       console.log(a)
    }
}

