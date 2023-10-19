// 04 Prompt for a menu option and have it perform the corresponding action action

let option = parseFloat(prompt("Please type 1 to show App Home, 2 to View Profile, and 3 to Edit Settings"));

function restartMenu() {
    switch (option) {
        case 1:
            console.log("01 - This is the App Home page");
            break;
        case 2:
            console.log("02 - This is the View Profile page");
            break;
        case 3:
            console.log("03 - This is the Edit Settings page");
            break;
        default:
            console.log("Please type 1, 2, or 3 to choose a menu option.");
            break;
    }
}
restartMenu();