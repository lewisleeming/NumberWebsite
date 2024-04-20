'use strict'

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const x = function(){
//     console.log(23);
// }
// x();

let number = Math.trunc(Math.random()*10 + 1);
console.log(number);
let score = 20;

let highscore = 0;

let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(score  > 0){
        if(!guess){
            displayMessage('No number!');
        }else if(guess == number){
            displayMessage('Correct Number!');

            //changing css
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';


            if(score>highscore){
                //correct high
                displayMessage('New High Score!');
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if(guess !== number){
            displayMessage(guess>number? 'Too High': "Too low");
            score--;
            document.querySelector('.score').textContent = score;
        }
    }else{
        displayMessage('You Lost');
    }
});

document.querySelector('.again').addEventListener('click', function (){
    //reset all conditions
    score = 20;
    number = Math.trunc(Math.random()*10);
    console.log(number);
    document.querySelector('body').style.backgroundColor = '#071d06cf';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = 0;
    document.querySelector('.number').style.width = '15rem';
});