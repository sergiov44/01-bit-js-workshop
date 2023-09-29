// 04 Prompt for 2 Numbers to Add

let number = prompt("Type 2 numbers, sepated with a comma: ");
const numberList = number.split(",");

let result = Number(numberList[0]) + Number(numberList[1]);
console.log(result);