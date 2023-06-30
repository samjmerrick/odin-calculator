let currentNumber = "";
let prevNumber = "";
let operator = "";

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('button.num');
const operandButtons = document.querySelectorAll('button.operand');

numberButtons.forEach(btn => 
    btn.addEventListener("click", () => {
        updateNum(btn.innerText);
    })
);

operandButtons.forEach(btn => 
    btn.addEventListener('click', () => {
        operator = btn.innerText;
        operate();
    })
)

document.querySelector('button.clear').addEventListener("click", () => {
    currentNumber = "";
    display.innerText = "0";
});

document.querySelector('button.equals').addEventListener("click", () => {
    operate();
})

function updateNum(num){
    currentNumber += num;
    display.innerText = currentNumber;
}

function operate() {

    if (operator == "") return;

    if(prevNumber == "") {
        prevNumber = currentNumber;
        currentNumber = "";
        return;
    }

    let result;

    switch (operator) {
        case "x":
            result = multiply(prevNumber, currentNumber);
            break;
        case "/":
            result = divide(prevNumber, currentNumber);
            break;
        case "+":
            result = add(prevNumber, currentNumber);
            break;
        case "-":
            result = subtract(prevNumber, currentNumber);
            break;
    }

    display.innerText = result;

    prevNumber = result;
    currentNumber = "";
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