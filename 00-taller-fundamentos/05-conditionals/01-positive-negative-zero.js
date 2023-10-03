// 01 Positive,Negative, or Zero Number

let number = parseFloat(prompt("Type a number: "));

if (number > 0) {
    console.log(`${number} is a positive number.`);
} else if (number < 0) {
    console.log(`${number} is a negative number.`);
} else if (number = 0) {
    console.log(`${number} is zero.`);
} else {
    console.log("Please type a number");
}