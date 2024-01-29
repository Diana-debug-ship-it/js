// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while (~(pos = str.indexOf(target, pos + 1))) {
//   console.log( pos );
// }
// console.log("Interface".includes("Inter"));
// console.log("Interface".includes("No"));
// console.log("Interface".startsWith("In"));
// console.log("Interface".endsWith("face"));
// let str = "stringify";
// console.log(( str.slice(2) )); // ringify, с позиции 2 и до конца
// let str = "stringify";
// // для substring эти два примера — одинаковы
// console.log(( str.substring(2, 6) )); // "ring"
// console.log(( str.substring(6, 2) )); // "ring"


let startPos = 0;
let endPos = 1;
let firstSymbol = "";
function showVericalMessage(string) {
  let str = string;
  while (endPos < 8) {
      let symbol = str.slice(startPos, endPos);
      if (symbol == "s") {
        firstSymbol = str[0].toUpperCase();
        console.log(firstSymbol);
      }
      else {
        console.log(symbol);
      };
      startPos++;
      endPos++;
    
  };
};
showVericalMessage('strada');

