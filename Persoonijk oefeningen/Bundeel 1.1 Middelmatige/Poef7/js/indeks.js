document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

var som = 0
for(let a=1; a <=100; a++) {
    if (a % 2 !== 0) {
        som = som + a
    }
}
console.log(som)

