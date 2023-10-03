// 04 Fruit List Elements

let fruitList = ["Apple", "Pineapple", "Strawberry", "Lemon"];
console.log(fruitList);

let fruitListMinusFirst = fruitList.shift();
console.log(fruitList);

let fruitListPlusNewFirst = fruitList.unshift("Blueberry");
console.log(fruitList);

let fruitListPlusNewLast = fruitList.push("Mango");
console.log(fruitList);