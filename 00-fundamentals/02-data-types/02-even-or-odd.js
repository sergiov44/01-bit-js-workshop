// 02 Prompt for a number and alert if it's odd or even

let number = parseFloat(prompt("Please type a number: "));

if(number % 2 == 0) {
    alert(`${number} is an even number.`);
} else {
    alert(`${number} is an odd number`);
}