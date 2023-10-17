// 04 Using ternary operators define if a prompted for number is even or odd

let number = parseFloat(prompt("Please type a number: "));

number % 2 == 0 ?
    console.log(`${number} is an even number.`):
    console.log(`${number} is an odd number.`);