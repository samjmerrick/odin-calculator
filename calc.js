let currentNumber = null;
let prevNumber = null;
let operator = "";

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('button.num');
const operandButtons = document.querySelectorAll('button.operand');

numberButtons.forEach(btn => 
    btn.addEventListener("click", () => {
        updateNum(btn.innerText);
        display.innerText = currentNumber;
    })
);

function updateNum(num){
    if(currentNumber == null) {
        currentNumber = Number(num);
        return;
    }
    const newNum = currentNumber += num;
    currentNumber = Number(newNum);
}

operandButtons.forEach(btn => 
    btn.addEventListener('click', () => {
        operator = btn.innerText;
        operate();
    })
)

document.querySelector('button.clear').addEventListener("click", () => {
    currentNumber = null;
    prevNumber = null;
    display.innerText = "0";
});

document.querySelector('button.equals').addEventListener("click", () => {
    operate();
})


function operate() {

    if (operator == "" || currentNumber == null) return;

    if(prevNumber == null) {
        prevNumber = currentNumber;
        currentNumber = null;
        return;
    }

    let result = calculate();

    display.innerText = result;
    prevNumber = result;
    currentNumber = null;
}

function calculate(){
    switch (operator) {
        case "x":
            return multiply(prevNumber, currentNumber);
        case "/":
            return divide(prevNumber, currentNumber);
        case "+":
            return add(prevNumber, currentNumber);
        case "-":
            return subtract(prevNumber, currentNumber);
    }
}

function add(a, b) {
    return a + b;
};
  
function subtract(a, b) {
    return a - b;
};

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}