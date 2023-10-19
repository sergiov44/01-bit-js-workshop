// 03 Prompt for a number representing their respective month of the year, and use the switch structure to show the name of the month

let number = parseFloat(prompt("Please type a number from 1 to 12 representing its respective month of the year: "));

switch (number) {
    case 1:
        console.log(`The month number ${number} is January`);
        break;
    case 2:
        console.log(`The month number ${number} is February`);
        break;
    case 3:
        console.log(`The month number ${number} is March`);
        break;
    case 4:
        console.log(`The month number ${number} is April`);
        break;
    case 5:
        console.log(`The month number ${number} is May`);
        break;
    case 6:
        console.log(`The month number ${number} is June`);
        break;
    case 7:
        console.log(`The month number ${number} is July`);
        break;
    case 8:
        console.log(`The month number ${number} is August`);
        break;
    case 9:
        console.log(`The month number ${number} is September`);
        break;
    case 10:
        console.log(`The month number ${number} is October`);
        break;
    case 11:
        console.log(`The month number ${number} is November`);
        break;
    case 12:
        console.log(`The month number ${number} is December`);
        break;
    default:
        console.log("Please type a number from 1 to 12 representing its respective month of the year: ");
        break;
}