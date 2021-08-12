// for (let i =1; i < 8; i++){
//     console.log("#".repeat(i));
// }
// Fizz Buzzz
// for(let i=1; i<101; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz", i)
//     }else if(i %3 ==0 ){
//         console.log("Fizz", i )
//     }else if(i%5 ==0){
//         console.log("Buzz", i)
//     }else{
//         console.log(i);
//     }
// }
const test = "Bob";
const generateChess = (length, width) => {
  let output = "";
  for (let i = 0; i < length; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      if (i % 2 == 0) {
        j % 2 == 0 ? (row += "#") : (row += " ");
      } else {
        j % 2 == 1 ? (row += "#") : (row += " ");
      }
    }
    output += row;
    output += "\n";
  }
  return output;
};
console.log(generateChess(5, 5));
