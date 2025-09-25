let leefTijd = parseInt(window.prompt("Hoe oud ben jij?"))

if(leefTijd >= 18) {
    alert("Jij bent volwassene");
}else if(leefTijd  > 12 && leefTijd < 18) {
    alert("Jij kan krasje kopen");
} else {
        alert("jij ben nog kido");
}


// let getal1 = parseFloat(window.prompt("Wat is getal 1?"));
// let getal2 = parseFloat(window.prompt("Wat is getal 2?"));
//
// if(getal1 > getal2) {
//     alert("getal 1 is groer dan getal 2");
// }else if(getal1 === getal2) {
//     alert("getal 1 is gelijk aan getal 2");
// } else {
//         alert("getal1 kleiner zijn dan getal2");
// }