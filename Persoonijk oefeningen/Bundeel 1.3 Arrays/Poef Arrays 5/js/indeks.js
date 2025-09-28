document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";
// Oefening 5: Zoeken in een array
// Schrijf een programma dat controleert of een bepaald getal aanwezig
// is in een array en "Gevonden!" afdrukt als het aanwezig is, anders "Niet gevonden".

let getal = parseInt(window.prompt("Geef een getal:"))
let elementen=[5,6,8,11,50,1,3];

for(let element of elementen){
    if (getal == element){
        console.log("deze getal vindt zijn plaats in array")
        break;
    }else {
        console.log("niet gevonden")
        break;
    }
}


// let elementen=[5,6,8,11,50,1,3];
//
// elementen.reverse();
// console.log(elementen)
