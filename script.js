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
    plus.style.background = "#ffffff";
    take.style.background = "#ffffff";
    times.style.background = "#ffffff";
    divided.style.background = "#ffffff";
    difference.style.background = "#ffffff";
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
    buttonClearsDisplay();
    inputNumber(0);
});
one.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(1);
});
two.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(2);
});
three.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(3);
});
four.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(4);
});
five.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(5);
});
six.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(6);
});
seven.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(7);
});
eight.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(8);
});
nine.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(9);
});
dot.addEventListener("click", () => {
    operatorClear();
    buttonClearsDisplay();
    inputNumber(".");
});

clear.addEventListener("click", () => {
    displayValue = "";
    storedNumber = "";
    display.innerText = "";
    plus.style.background = "white"
    take.style.background = "white"
    times.style.background = "white"
    divided.style.background = "white"
    difference.style.background = "white"
});

plus.addEventListener("click", () => {
    operateEquals();
    correctOperator(add);
    storedNumber = displayValue;
    displayValue = "";
    plus.style.background = "#e6e6e6";
});

take.addEventListener("click", () => {
    operateEquals();
    correctOperator(subtract);
    storedNumber = displayValue;
    displayValue = "";
    take.style.background = "#e6e6e6";
});

times.addEventListener("click", () => {
    operateEquals();
    correctOperator(multiply);
    storedNumber = displayValue;
    displayValue = "";
    times.style.background = "#e6e6e6";
});

divided.addEventListener("click", () => {
    operateEquals();
    correctOperator(divide);
    storedNumber = displayValue;
    displayValue = "";
    divided.style.background = "#e6e6e6";
});

difference.addEventListener("click", () => {
    operateEquals();
    correctOperator(remainder);
    storedNumber = displayValue;
    displayValue = "";
    difference.style.background = "#e6e6e6";
});

equals.addEventListener("click", () => {
    display.innerText = 
        operate(operation, parseInt(storedNumber), parseInt(displayValue));
    storedNumber = "";
    displayValue = "";
});

function buttonClearsDisplay() {
    if (!displayValue) {
        return display.innerText = "";
    }
};

function operateEquals() {
    if (storedNumber > 0) {
        display.innerText = 
            operate(operation, parseInt(storedNumber), parseInt(displayValue));
        displayValue = display.innerText;
    };
};

function correctOperator(operator) {
    operation = operator;
}