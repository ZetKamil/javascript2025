 document.body.style.backgroundColor="darkgreen";

var geboerteDatum = window.prompt("Wat is je geboerte datum?");
 var hudigeJaar =window.prompt("Welke jaar is het?");

// console.log(`Jij bent ${hudigeJaar} - ${geboerteDatum}');

  if (hudigeJaar - geboerteDatum >= 18) {
      console.log(`U bent ${hudigeJaar - geboerteDatum} u Mag deelnemen`);
  }else{
      console.log(`U bet ${hudigeJaar - geboerteDatum} u mag NIET deelnemen`)
 }

//  if (leefTijd >= 18) {
//      console.log(`U bent ${leefTijd} jaar u mag deelnemen`);
//  }else{
//      console.log(`u bent ${leefTijd} jaar u bent te jong!`)
//  }
//
//
//
// var leefTijd = window.prompt("Hoe oud ben jij? :");
//
// // var leefTijd = parseInt(leefTijd);
//
// if (leefTijd >= 18) {
//     console.log(`U bent ${leefTijd} jaar u mag deelnemen`);
// }else{
//     console.log(`u bent ${leefTijd} jaar u bent te jong!`)
// }
//
// // console.log(leefTijd);
//
// // console.log(parseInt(leefTijd));