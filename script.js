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
    if (display.innerText.length > 8){
        return;
    };
    displayValue += number;
    return display.innerText += number;
}

function operatorClear() {
    plus.style.background = "#80c24669";
    take.style.background = "#80c24669";
    times.style.background = "#80c24669";
    divided.style.background = "#80c24669";
    difference.style.background = "#80c24669";
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
const backspace = document.querySelector(".delete")

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
    if (display.innerText.split(".").length -1 < 1) { 
        inputNumber(".");
    } else {
        return
    }
});

clear.addEventListener("click", () => {
    operation = "";
    displayValue = "";
    storedNumber = "";
    display.innerText = "";
    plus.style.background = "#80c24669"
    take.style.background = "#80c24669"
    times.style.background = "#80c24669"
    divided.style.background = "#80c24669"
    difference.style.background = "#80c24669"
});

backspace.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    display.innerText = display.innerText.slice(0, -1);
});


plus.addEventListener("click", () => {
    operateEquals();
    correctOperator(add);
    invalidAnswer();
    storedNumber = displayValue;
    displayValue = "";
    plus.style.background = "#80c246";
});

take.addEventListener("click", () => {
    operateEquals();
    correctOperator(subtract);
    invalidAnswer();
    storedNumber = displayValue;
    displayValue = "";
    take.style.background = "#80c246";
});

times.addEventListener("click", () => {
    operateEquals();
    correctOperator(multiply);
    invalidAnswer();
    storedNumber = displayValue;
    displayValue = "";
    times.style.background = "#80c246";
});

divided.addEventListener("click", () => {
    operateEquals();
    correctOperator(divide);
    invalidAnswer();
    storedNumber = displayValue;
    displayValue = "";
    
    divided.style.background = "#80c246";
});

difference.addEventListener("click", () => {
    operateEquals();
    correctOperator(remainder);
    invalidAnswer();
    storedNumber = displayValue;
    displayValue = "";
    difference.style.background = "#80c246";
});


equals.addEventListener("click", () => {
    if (!operation) {
        return
    };
    if (display.innerText.split(".").length -1 == 1 ||
        storedNumber.split(".").length -1 == 1) {
            display.innerText = 
                operate(operation, parseFloat(storedNumber), parseFloat(displayValue));
            if (display.innerText.length > 8) { 
                display.innerText = parseFloat(displayValue).toExponential(2);
            };
    } else {
        display.innerText = 
            operate(operation, parseInt(storedNumber), parseInt(displayValue));
        if (display.innerText.length > 8) { 
            display.innerText = parseInt(displayValue).toExponential(2);
        };
    }
    invalidAnswer();
    operation = "";
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
        if (display.innerText.split(".").length -1 == 1 ||
        storedNumber.split(".").length -1 == 1 ||
        displayValue.split(".").length -1 == 1 ) {
            display.innerText = 
                operate(operation, parseFloat(storedNumber), parseFloat(displayValue));
            if (display.innerText.length > 8) { 
                display.innerText = parseFloat(displayValue).toExponential(2);
            };
        } else {
            display.innerText = 
                operate(operation, parseInt(storedNumber), parseInt(displayValue));
            displayValue = display.innerText;

            if (display.innerText.length > 8){
                display.innerText = parseInt(displayValue).toExponential(2);
            };
        };
    };
};

function correctOperator(operator) {
    return operation = operator;
};

function invalidAnswer() {
    if (display.innerText == Infinity) {
        return display.innerText = "Yeah, nah"
    }
};
