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
        previousNumber = nextNumber;
        nextNumber = '';
    })
})

function add(num1,num2){
    let result = parseInt(num1) + parseInt(num2)
    console.log(result);
}


function subtract(num1,num2){
    let result = parseInt(num1) - parseInt(num2)
    console.log(result);
}

function multiply(num1,num2){
    let result = parseInt(num1) * parseInt(num2)
    console.log(result);
}

function divide(num1,num2){
    let result = parseInt(num1) / parseInt(num2)
    console.log(result);
}
