// 03 Age of a Child, Teen or Adult

let age = parseFloat(prompt("Please type your age: "));

if (age < 12) {
    console.log("You're a child.");
} else if (age >= 12 && age <= 17) {
    console.log("You're a teen.");
} else if (age > 17) {
    console.log("You're an adult.");
} else {
    console.log("Please type an actual age.");
};