let currentNumber = null;
let prevNumber = null;
let operator = null;

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

operandButtons.forEach(btn => 
    btn.addEventListener('click', () => {

        if(!operator) {
            operator = btn.innerText;
            operate();
        }
        else {
            operate();
            operator = btn.innerText;
        }

        btn.classList.add('active');
    })
)

document.querySelector('button.clear').addEventListener("click", () => {
    currentNumber = null;
    prevNumber = null;
    operator = null;
    display.innerText = "0";
});

document.querySelector('button.equals').addEventListener("click", () => {
    operate();
})


function operate() {

    if (!operator || !currentNumber) return;

    if(prevNumber == null) {
        prevNumber = currentNumber;
        currentNumber = null;
        return;
    }

    let result = calculate();

    display.innerText = result;
    prevNumber = result;
    currentNumber = null;
    operator = null;
    document.querySelector('button.operand.active').classList.remove('active');
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