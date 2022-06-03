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

function inputNumber(number) {
    displayValue += number;
    return display.innerText += number;
}

function operatorClear() {
    if (display.innerText === "+") {
        display.innerText = "";
    } else if (display.innerText === "-") {
        display.innerText = "";
    } else if (display.innerText === "x") {
        display.innerText = "";
    } else if (display.innerText === "/") {
        display.innerText = "";
    } else if (display.innerText === "%") {
        display.innerText = "";
    }
};

const display = document.querySelector(".calcDisplay")
let displayValue = "";
let operation = "";
let storedNumber = "";

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

const plus = document.querySelector(".add");
const take = document.querySelector(".subtract");
const times = document.querySelector(".multiply");
const divided = document.querySelector(".divide");
const difference = document.querySelector(".remainder");
const equals = document.querySelector(".equals");
// use different names here to avoid function calls

zero.addEventListener("click", () => {
    operatorClear();
    inputNumber(0);
});
one.addEventListener("click", () => {
    operatorClear();
    inputNumber(1);
});
two.addEventListener("click", () => {
    operatorClear();
    inputNumber(2);
});
three.addEventListener("click", () => {
    operatorClear();
    inputNumber(3);
});
four.addEventListener("click", () => {
    operatorClear();
    inputNumber(4);
});
five.addEventListener("click", () => {
    operatorClear();
    inputNumber(5);
});
six.addEventListener("click", () => {
    operatorClear();
    inputNumber(6);
});
seven.addEventListener("click", () => {
    operatorClear();
    inputNumber(7);
});
eight.addEventListener("click", () => {
    operatorClear();
    inputNumber(8);
});
nine.addEventListener("click", () => {
    operatorClear();
    inputNumber(9);
});
dot.addEventListener("click", () => {
    operatorClear();
    inputNumber(".");
});

clear.addEventListener("click", () => {
    displayValue = "";
    display.innerText = "";
});

plus.addEventListener("click", () => {
    operation = "";
    storedNumber = displayValue;
    operation = add;
    displayValue = "";
    display.innerText = "+";
});

take.addEventListener("click", () => {
    operation = "";
    storedNumber = displayValue;
    operation = subtract;
    displayValue = "";
    display.innerText = "-";
});

times.addEventListener("click", () => {
    operation = "";
    storedNumber = displayValue;
    operation = multiply;
    displayValue = "";
    display.innerText = "x";
});

divided.addEventListener("click", () => {
    operation = "";
    storedNumber = displayValue;
    operation = divide;
    displayValue = "";
    display.innerText = "/";
});

difference.addEventListener("click", () => {
    operation = "";
    storedNumber = displayValue;
    operation = remainder;
    displayValue = "";
    display.innerText = "%";
});

equals.addEventListener("click", () => {
    display.innerText = 
    operate(operation, parseInt(storedNumber), parseInt(displayValue));
    storedNumber = "";
    displayValue = "";
});
