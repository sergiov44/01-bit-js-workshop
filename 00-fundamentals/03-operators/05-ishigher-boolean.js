// Declara una variable booleana llamada esMayor y asigna el resultado de una comparación entre dos edades (por ejemplo, 18 y 25). Luego, muestra el valor de esMayor en la consola.

// 05 Declare a boolean variable named "Is Higher Than", and compare two values provided, to present the higher one in the console


let number1 = parseFloat(prompt("Please type a number: "));
let number2 = parseFloat(prompt("Please type another number: "));

let isHigherThan = number1 > number2;

if(isHigherThan) {
    console.log(`${number1} is higher than ${number2}`);
} else {
    console.log(`${number2} is higher than ${number1}`);
}