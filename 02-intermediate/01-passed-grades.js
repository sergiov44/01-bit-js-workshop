// 01 Grade Passing Function

let grade = parseFloat(prompt("Please type your grade: "));

if (grade >= 3.5 && grade <= 5) {
    console.log(`Your grade: ${grade}, is a passing score.`);
} else if (grade < 3.5 && grade >= 0) {
    console.log(`Your grade: ${grade}, is a NOT passing score.`);
} else {
    console.log("Please type your grade as a number between 0 and 5.");
};