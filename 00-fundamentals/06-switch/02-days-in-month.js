// 02 Prompt for a number representing thei respective month of the year, and use the switch structure to show the amount of days in such month

let number = parseFloat(prompt("Please type a number from 1 to 12 representing its respective month of the year: "));

switch (number) {
    case 1:
        console.log(`${number} - January has 31 days`);
        break;
    case 2:
        console.log(`${number} - February has 28 or 29 days`);
        break;
    case 3:
        console.log(`${number} - March has 31 days`);
        break;
    case 4:
        console.log(`${number} - April has 30 days`);
        break;
    case 5:
        console.log(`${number} - May has 31 days`);
        break;
    case 6:
        console.log(`${number} - June has 30 days`);
        break;
    case 7:
        console.log(`${number} - July has 31 days`);
        break;
    case 8:
        console.log(`${number} - August has 31 days`);
        break;
    case 9:
        console.log(`${number} - September has 30 days`);
        break;
    case 10:
        console.log(`${number} - October has 31 days`);
        break;
    case 11:
        console.log(`${number} - November has 30 days`);
        break;
    case 12:
        console.log(`${number} - December has 31 days`);
        break;
    default:
        console.log("Please type a number from 1 to 12 representing its respective month of the year: ");
        break;
}