const buttons = document.querySelectorAll('.numbers')
const operand = document.querySelectorAll('.operand')
const addition = document.getElementById('addition')
let previousNumber = '';
let nextNumber = '';
let operator = '';


buttons.forEach(button => {
    button.addEventListener('click',()=>{
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
        if(previousNumber == ''){
            previousNumber = nextNumber;
            nextNumber = '';
        }
        else{
            previousNumber = previousNumber;
        }

    })
})

function add(num1,num2){
    let numbers = parseInt(num1) + parseInt(num2)
    previousNumber = numbers.toString();
    console.log(previousNumber);
    operator = ''
    nextNumber = ''
}


function subtract(num1,num2){
    let numbers = parseInt(num1) - parseInt(num2)
    previousNumber = numbers.toString();
    console.log(previousNumber);
    operator = '';
    nextNumber = '';
}

function multiply(num1,num2){
    let numbers = parseInt(num1) * parseInt(num2)
    previousNumber = numbers.toString();
    console.log(previousNumber);
    operator = '';
    nextNumber = '';
}

function divide(num1,num2){
    let numbers = parseInt(num1) / parseInt(num2)
    previousNumber = numbers.toString();
    console.log(previousNumber);
    operator = '';
    nextNumber = '';
}
