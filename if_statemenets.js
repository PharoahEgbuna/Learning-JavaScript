let userInput = prompt("Enter a random number");

if (userInput > 90 && userInput < 110) {
    alert("Bingo!");
} else {
    alert("Miss!");
}

// let hitOrMiss = userInput > 90 && userInput < 110 ? "Bingo!" : "Miss";

// console.log(hitOrMiss);

let userNum1 = Number(prompt("Enter the first number"));
let userNum2 = Number(prompt("Enter the second number"));
let userOperand = prompt("Enter an operand (+, -, /, *)");
let result;

if (Number.isNaN(userNum1) == false &&  Number.isNaN(userNum2) == false) {
    switch (userOperand) {
        case "+":
            result = userNum1 + userNum2;
            break;
        case "-": 
            result = userNum1 - userNum2;
            break;
        case "*":
            result = userNum1 * userNum2;
            break;
        case "/":
            result = userNum1 / userNum2;
            break;
    }
} else {
    result = ("Error: at least one of the entered values is not a number or operand.");
}

alert(result);