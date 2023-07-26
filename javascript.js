const buttons = document.querySelectorAll('.numbers');
const operand = document.querySelectorAll('.operand');
const result = document.querySelector('.result');
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
let previousNumber = '';
let nextNumber = '';
let operator = '';
let outputString = '';

equals.addEventListener('click',()=>{
    outputString = previousNumber;
    result.innerText = outputString;
    nextNumber = '';
    operator = '';
})

clear.addEventListener('click',()=>{
     resetInputs();
     result.innerText = outputString;
})

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        outputString += '' + button.textContent;
        result.innerText = outputString;
        nextNumber += button.textContent;
        if(previousNumber && nextNumber && operator){
            switch (operator){
                case '+':
                    add(previousNumber,nextNumber);
                    break;
                case '-':
                    subtract(previousNumber,nextNumber);
                    break;
                case '*':
                    multiply(previousNumber,nextNumber);
                    break;
                case '/':
                    divide(previousNumber,nextNumber);
                    break;
            }
        }
    })
});

operand.forEach(operatorButton =>{
    operatorButton.addEventListener('click',()=>{
        operator = operatorButton.textContent;
        outputString += ' ' + operator + ' '
        result.innerText = outputString;

        if(previousNumber == ''){
            previousNumber = nextNumber;
            nextNumber = '';
        }
        else{
            previousNumber = previousNumber;
        }

    })
})

function resetInputs(){
     previousNumber = '';
     nextNumber = '';
     operator = '';
     outputString = ''
}

function add(num1,num2){
    let numbers = parseInt(num1) + parseInt(num2)
    previousNumber = numbers.toString();
    console.log(previousNumber + ' result');
    operator = ''
    nextNumber = ''
}

function subtract(num1,num2){
    let numbers = parseInt(num1) - parseInt(num2)
    previousNumber = numbers.toString();
    console.log(previousNumber + ' result');
    operator = '';
    nextNumber = '';
}

function multiply(num1,num2){
    let numbers = parseInt(num1) * parseInt(num2)
    previousNumber = numbers.toString();
    console.log(previousNumber + ' result');
    operator = '';
    nextNumber = '';
}

function divide(num1,num2){
    let numbers = parseInt(num1) / parseInt(num2)
    previousNumber = numbers.toString();
    console.log(previousNumber + ' result');
    operator = '';
    nextNumber = '';
}
