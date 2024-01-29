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



function showVericalMessage(string) {
  let firstPos = 0;
  let lastPos = 1;
  let firstSymbol = "";
  let str = string;
  while (lastPos < 8) {
      let symbol = str.slice(firstPos, lastPos);
      if (symbol == "s") {
        firstSymbol = str[0].toUpperCase();
        console.log(firstSymbol);
      }
      else {
        console.log(symbol);
      };
      firstPos++;
      lastPos++;
    
  };
};
showVericalMessage('strada');

