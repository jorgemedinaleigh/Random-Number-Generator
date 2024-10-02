//Random Number Generator

const generateNumBtn = document.getElementById("generateNumBtn");
const randomNumber = document.getElementById("randomNumberLabel");
const min = 0;
const max = 100;
let randomNum;

generateNumBtn.onclick = function()
{
    randomNum = Math.floor(Math.random() * (max - min) + min);
    randomNumber.textContent = randomNum;
}