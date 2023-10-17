// 03 Prompt for user's name and gender, and increment ticket price in 2 for Male, or decrement in 2 for Female

let ticketCost = 7;

let person = {name: prompt("Please type your name: "), gender: prompt("Please type your gender as M/F/O ")};

if(person.gender == "M"){
    ticketCost = ticketCost + 2;
    console.log(`Hi ${person.name}. Your ticket is $${ticketCost}`);
} else if(person.gender == "F") {
    ticketCost = ticketCost - 2;
    console.log(`Hi ${person.name}. Your ticket is $${ticketCost}`);
} else {
    console.log(`Hi ${person.name}. Your ticket is $${ticketCost}`);
}