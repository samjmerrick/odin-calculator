let a = "";
let b = "";
let operator;

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('button.num');

numberButtons.forEach(btn => 
    btn.addEventListener("click", () => {
        updateNum(btn.innerText);
    })
);

function updateNum(num){
    a += num;
    display.innerText = a;
}

function operate() {
    
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