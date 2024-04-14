document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.querySelector('.cal');
    calcBtn.addEventListener('click',(event) => {
        event.preventDefault();
        const num1 = document.querySelector('#num1').value;
        const num2 = document.querySelector('#num2').value;
        const op = document.querySelector('#op').value;
        const res = calculate(parseFloat(num1), parseFloat(num2), op);
        document.querySelector('#result').innerText = "Result: " + res;
        setTimeout( () => {
            document.querySelector('#result').innerText = "";
        }, 10000);
    });
});

const calculate = (num1, num2, op) => {
    let res = 0;
    switch (op) {
        case '+':
            res = num1 + num2;
            console.log(typeof num1);
            break;
        case '-':
            res = num1 - num2;
            console.log(typeof num1);
            break;
        case '*':
            res = num1 * num2;
            break;
        case '÷':
            res = num1 / num2;
            break;
        case '%':
            res = num1 % num2;
            break;
        default:
            res = 'Error Error';        
    }
    return res;
   };
