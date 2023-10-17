// 02 Declare a variable representing Celsius degrees, and define if it's subzero or above using if-else structures

let temperature = parseFloat(prompt("Please type a number representing a temperature in celsius degrees: "));

if(temperature < 0) {
    console.log(`${temperature} celsius degrees is considered a subzero temperature.`);
} else {
    console.log(`${temperature} celsius degrees is not a subzero temperature.`);
}