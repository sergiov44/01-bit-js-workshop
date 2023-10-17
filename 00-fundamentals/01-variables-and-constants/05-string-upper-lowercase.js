// 05 Define a long string variable, obtain its length, convert it to lowercase, and present the last word in uppercase using string methods

let longText = "This is a long sentence to test string methods.";

let textLength = longText.length;
console.log(`This string is ${textLength} characters long.`);

longText = longText.toLowerCase();
console.log(longText);


let wordsList = longText.split(' ');
let lastWord = wordsList[wordsList.length - 1];
let lastWordUpper = lastWord.toUpperCase();
longText = longText.replace(lastWord, lastWordUpper);
console.log(longText);