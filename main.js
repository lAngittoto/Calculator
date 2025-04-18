
const display = document.getElementById('display');
let current = " ";
let result = 0;


document.getElementById('clear').addEventListener('click', ()=>{
  display.value = "";

});
document.getElementById('remove_one').addEventListener('click', ()=>{
  display.value = display.value.slice(0, -1);
});

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const division = document.querySelector('.division');
const arithmetic = document.querySelectorAll('.arithmetic')

arithmetic.forEach((clicked)=>{
  clicked.addEventListener('click', ()=>{
    const value = display.value.trim();
    const operator = clicked.textContent;
    const lastChar = display.value[display.value.length - 1];
    if (value === "" && "+*/".includes(operators)) return;
    if ("+-*/".includes(lastChar)) return;
  
    display.value += clicked.textContent
  });
});


const equal = document.getElementById('equal');

equal.addEventListener('click', () => {
  try {
    let result = calculate(display.value);
    if (!isFinite(result) || isNaN(result)) throw new Error("Invalid");
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
});

const number = document.querySelectorAll('.number');
number.forEach((numbers)=>{
  
  numbers.addEventListener('click', ()=>{
    
  display.value += numbers.textContent;
   
  }); 
});


function calculate(expression) {

  let operands = expression.split(/([+\-*/])/).filter(Boolean);  
  
  
  for (let i = 0; i < operands.length; i++) {
    if (operands[i] === '*' || operands[i] === '/') {
      let num1 = parseFloat(operands[i - 1]);
      let num2 = parseFloat(operands[i + 1]);
      let operationResult = 0;
      if (operands[i] === '*') {
        operationResult = num1 * num2;
      } else if (operands[i] === '/') {
        operationResult = num1 / num2;
      }
      operands.splice(i - 1, 3, operationResult.toString());  // 
      i--; 
    }
  }


  for (let i = 0; i < operands.length; i++) {
    if (operands[i] === '+' || operands[i] === '-') {
      let num1 = parseFloat(operands[i - 1]);
      let num2 = parseFloat(operands[i + 1]);
      let operationResult = 0;
      if (operands[i] === '+') {
        operationResult = num1 + num2;
      } else if (operands[i] === '-') {
        operationResult = num1 - num2;
      }
      operands.splice(i - 1, 3, operationResult.toString());  
      i--;  
    }
  }

  return operands[0];  

}


document.getElementById('percentage').addEventListener('click', ()=>{
display.value = parseFloat(display.value) / 100;
});

const dot = document.getElementById ('dot');

dot.addEventListener('click', ()=>{
  if(!display.value.includes('.')){
    display.value += dot.textContent
  }
});

const white = document.getElementById('white');
const white_container = document.getElementById('white_container');
const black = document.getElementById('black');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const color = document.querySelectorAll('.color');
const name = document.querySelector('.name');
color.forEach((choose)=>{
  choose.addEventListener('click', ()=>{
    if(choose === white){
      white_container.style.background =` rgb(245, 245, 245)`;
      white_container.style.border = ``;
      name.style.color = ``;
    }else if(choose === black){
      white_container.style.background=`rgb(32, 32, 32)`;
      white_container.style.border = `none`;
      name.style.color = `white`;
    }else if(choose === red){
      white_container.style.background=` rgb(216, 99, 124)`;
      white_container.style.border = `none`;
      name.style.color = `white`;
    }else if(choose === green){
      white_container.style.background=`rgb(111, 187, 95)`;
      white_container.style.border = `none`;
      name.style.color = `white`;
    }else if (choose === blue){
      white_container.style.background=`rgb(9, 83, 168)`;
      white_container.style.border = `none`;
      name.style.color = `white`;
    }
  });
});