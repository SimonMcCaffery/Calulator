console.log("Hello WOrld!");

var userInputFirst;
var userInputSecond;
var operand;

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

console.log(operate(5,5,"+") + " Expect 10");  
console.log(operate(2,9,"*") + " Expect 18");
console.log(operate(10,5,"-") + " Expect 5");
console.log(operate(10,5,"/") + " Expect 2");