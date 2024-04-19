const timeOut = 10000;
let timeOutId = undefined;
document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.querySelector('.cal');
    calcBtn.addEventListener('click',(event) => {
        clearTimeout(timeOutId);
        event.preventDefault();
        const num1 = document.querySelector('#num1').value;
        const num2 = document.querySelector('#num2').value;
        const op = document.querySelector('#op').value;
        // const res = calculate(parseFloat(num1), parseFloat(num2), op);
        // const exp = "";
        const res = eval(`${num1} ${op} ${num2}`);
        if (res === undefined)
            document.querySelector('#result').innerText = "Error Error";
        else 
            document.querySelector('#result').innerText = "Result: " + res;
        timeOutId = setTimeout( () => {
            document.querySelector('#result').innerText = "";
        }, timeOut);
    });
});
