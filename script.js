function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function remainder(num1, num2) {
    return num1 % num2;
}

function operate(operator, num1, num2) {
    if (operator == add) {
        return add(num1, num2);
    } else if (operator == subtract) {
        return subtract(num1, num2); 
    } else if (operator == multiply) {
        return multiply(num1, num2); 
    } else if (operator == divide) {
        return divide(num1, num2); 
    } else if (operator == remainder) {
        return remainder(num1, num2)
    }
};

const display = document.querySelector(".calcDisplay")
let displayValue = "";

function inputNumber(number) {
    displayValue += number;
    return display.innerText += number;
}

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");

const clear = document.querySelector(".clear");

zero.addEventListener("click", () => {
    inputNumber(0);
});
one.addEventListener("click", () => {
    inputNumber(1);
});
two.addEventListener("click", () => {
    inputNumber(2);
});
three.addEventListener("click", () => {
    inputNumber(3);
});
four.addEventListener("click", () => {
    inputNumber(4);
});
five.addEventListener("click", () => {
    inputNumber(5);
});
six.addEventListener("click", () => {
    inputNumber(6);
});
seven.addEventListener("click", () => {
    inputNumber(7);
});
eight.addEventListener("click", () => {
    inputNumber(8);
});
nine.addEventListener("click", () => {
    inputNumber(9);
});
dot.addEventListener("click", () => {
    inputNumber(".");
});

clear.addEventListener("click", () => {
    displayValue = "";
    display.innerText = "";
});
