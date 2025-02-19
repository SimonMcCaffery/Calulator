console.log("Hello WOrld!");

let userInputOne = [];
let userInputTwo = [];
let userOperator = "";

const display = document.getElementsByClassName("display")[0];

function operate(val1, val2, operator){
    switch (operator) {
        case "+":
            return addition(val1, val2)            
        case "-":
            return subtraction(val1, val2)
        case "*":
            return multiply(val1, val2)
        case "/":
            return divide(val1, val2)
        default:
            break;
    }
}

function addition (val1, val2){
    return val1+val2;
}

function subtraction (val1, val2){
    return val1-val2;
}

function multiply (val1, val2){
    return val1*val2;
}

function divide (val1, val2){
    return val1/val2;
}

display.textContent = userInputOne + userOperator + userInputTwo;

function checkNull(arr){
    if (arr.length === 0){
        console.log("Array is empty")
    }
}

checkNull(userInputOne);