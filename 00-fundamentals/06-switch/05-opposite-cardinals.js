// 05 Prompt for a number representing a cardinal direction and use the switch structure to print it's opposite direction

let number = parseInt(prompt("Please type a number representing a cardinal point, where: 1 is North, 2 is East, 3 is West, and 4 is South."));

switch(number) {
    case 1:
        console.log("The opposite of North is South.");
        break;
    case 2:
        console.log("The opposite of East is West.");
        break;
    case 3:
        console.log("The opposite of West is East.");
        break;
    case 4:
        console.log("The opposite of South is North.");
        break;
    default:
        console.log("Please type a number from 1 to 4.");
}