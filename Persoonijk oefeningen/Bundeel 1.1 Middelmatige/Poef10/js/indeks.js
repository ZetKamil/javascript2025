document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

let number = parseInt(prompt("Voer een getal in:"));
let reversed = 0;
for (let i = number; i > 0; i = (i - (i % 10)) / 10) {
    let laatsteCijfer = i % 10; // Haal het laatste cijfer
    reversed = reversed * 10 + laatsteCijfer; // Voeg het laatste cijfer toe aan reversed
}
console.log(reversed);

