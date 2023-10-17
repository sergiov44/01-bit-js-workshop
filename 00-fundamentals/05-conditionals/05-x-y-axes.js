// 05 Prompt for 2 numbers representing X and Y in the cartesian plane, and print which of the 4 quadrants they're in

let numberX = parseFloat(prompt("Please type a number in the X-axis (horizontal): "));
let numberY = parseFloat(prompt("Please type a number in the Y-axis (vertical): "));

if(numberX >= 0 && numberY >= 0) {
    console.log("The intersecion is in quadrant 1.");
} else if(numberX >= 0 && numberY < 0) {
    console.log("The intersecion is in quadrant 2.");
} else if(numberX < 0 && numberY < 0) {
    console.log("The intersecion is in quadrant 3.");
} else if(numberX < 0 && numberY >= 0) {
    console.log("The intersecion is in quadrant 4.");
} else {
    console.log("Please type numeric values to be placed in the cartesian plane.");
}