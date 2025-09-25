 document.body.style.backgroundColor="darkgreen";

var leefTijd = window.prompt("Hoe oud ben jij? :");

// var leefTijd = parseInt(leefTijd);

if (leefTijd >= 18) {
    console.log(`U bent ${leefTijd} jaar u mag deelnemen`);
}else{
    console.log(`u bent ${leefTijd} jaar u bent te jong!`)
}

// console.log(leefTijd);

// console.log(parseInt(leefTijd));