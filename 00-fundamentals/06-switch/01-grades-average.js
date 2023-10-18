// 01 Prompt for 3 grades within a 0 to 5 range, including decimal numbers, to calculate their average and show the appropriate message

let grade1 = parseFloat(prompt("Please type the first grade: "));
let grade2 = parseFloat(prompt("Please type the second grade: "));
let grade3 = parseFloat(prompt("Please type the third grade: "));
let average = (grade1 + grade2 + grade3) / 3;

switch(average) {
    case average >= 0 && average > 2.5:
        console.log("Insufficient, you did not pass the course.");
        break;
    case average >= 2.5 && average < 3.5:
        console.log("Insufficient, you can repeat the test.");
        break;
    case average >= 3.5 && average < 4:
            console.log("Course passed.");
            break;
    case average >= 4:
        console.log("Excellent!");
        break;
    default:
        console.log("Please type three numberical grades, between 0.0 and 5.0.");
}