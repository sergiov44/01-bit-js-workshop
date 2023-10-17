// 02 Prompt for a product's name, define a price variable, and have it increase in 1 as many times as letters the product's name has. Do the same with a decreasing variable.

let product = prompt("Type the name of a fruit: ");
let price = 0;

let productLength = product.length++;
console.log(`The ${product} has a value of: ${productLength}`);