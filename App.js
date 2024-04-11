let randomNumber = Math.floor(Math.random() * 5) + 1;
const btn = document.getElementById("buttonId");
const intputVal = document.getElementById("inputId");
const displayScore = document.getElementById("displayScore");
console.log(randomNumber);
const scoreValue = document.getElementById("scoreId");
const againbtn = document.getElementById("againbtn");
const predictValue = document.getElementById("predictId");
let score = 20;
let highScore = 0;

predictValue.value = "Start Guessing..........."
const displayPage = (message) =>{
    predictValue.textContent = message;

}
btn.addEventListener('click',function (){
    if(parseInt(intputVal.value) === randomNumber){
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayScore.textContent = score;
        displayPage("Correct Answer");
    }
    else if(parseInt(intputVal.value) !== randomNumber){
        document.querySelector('body').style.backgroundColor = '#F62323';
        score = score - 5
        scoreValue.textContent = score;
        if(score === 0){
            displayPage("You lost the Game, Try Again");
        }
        else{
            displayPage("Wrong Answer");
        }
    }
});

againbtn.addEventListener("click", function (){
    randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    score = 20;
    scoreValue.textContent = 20;
    displayScore.textContent = score;
    document.querySelector('body').style.backgroundColor = '';
    displayPage("Start Guessing...........")
});