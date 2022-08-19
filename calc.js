let a = ''; //first number
let b = '';  //second number 
let sign = ''; // знак математичної операції
let finish = false;


const digit = ['0', '1', '2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];

// Екран

const out = document.querySelector('.calc-screen p');

function clearAll () {
    let a = ''; //first number
    let b = '';  //second number 
    let sign = ''; // знак математичної операції
    let finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //натиснута не кнопка
    if(!event.target.classList.contains('btn'))return;
    //натиснута кнопка clearAll ac
    if(event.target.classList.contains('ac'))return;

    // Зробити пусту строку
    out.textContent = '';
    //отримати натиснуту кнопку
    const key = event.target.textContent;

    //якщо натиснута кнопка 0-9 або .
    if (digit.includes(key)) {
        if(b ==='' && sign === '') {
        a += key;
        console.log(a, b , sign);
        out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b , sign);   
        return;

    }

    //Якщо натиснута клавіша + - / *
    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b , sign);
        return;
    }

    //натиснуто = 
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Помилка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}