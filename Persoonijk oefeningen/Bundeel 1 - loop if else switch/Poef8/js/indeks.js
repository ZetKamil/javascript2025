document.body.style.backgroundColor="darkgreen";
document.body.style.color="white";

var hoveel = parseFloat(window.prompt("Hoveel linjnen met star?"));

var star = "*";
for(let a =1;a<=hoveel;a=a+1) {
    console.log(star)
    star = star + "*";
}

// var som = 0
// for(let teller=1;teller<=10;teller=teller+1)
// {
//     let getal=(for(let a=1;a<=10;a=a+1){
//         console.log(a)
// }
//    som = som + getal
// }
// alert(som);

// var som = 0
// for(let teller=1;teller<=10;teller=teller+1)
// {
//     let getal=parseInt(window.prompt('Geef een getal ${getal} in:'));
//    som = som + getal
// }
// alert(som);