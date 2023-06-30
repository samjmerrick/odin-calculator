let currentNumber = null;
let prevNumber = null;
let activeOperatorButton = null;

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
    currentNumber = !currentNumber ? 
        Number(num) : 
        Number(currentNumber += num);
}

operandButtons.forEach(btn => btn.addEventListener('click', () => {
    if(activeOperatorButton) {
        operate();
        activeOperatorButton = btn;
        btn.classList.add('active');
    }
    else {
        activeOperatorButton = btn;
        btn.classList.add('active');
        operate();
    }
}));


document.querySelector('button.clear').addEventListener("click", () => {
    currentNumber = null;
    prevNumber = null;
    removeActiveOperator();
    display.innerText = "0";
});

document.querySelector('button.equals').addEventListener("click", () => {
    operate();
})

function removeActiveOperator() {
    if(activeOperatorButton){ 
        activeOperatorButton.classList.remove('active');
        activeOperatorButton = null;
    }
}

function operate() {

    if (!currentNumber || !activeOperatorButton) return;

    if(!prevNumber) {
        prevNumber = currentNumber;
        currentNumber = null;
        return;
    }

    const operator = activeOperatorButton.innerText;
    const result = calculate(prevNumber, currentNumber, operator);

    display.innerText = result;
    prevNumber = result;
    currentNumber = null;
    removeActiveOperator();
}


function calculate(a, b, operator){
    switch (operator) {
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
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