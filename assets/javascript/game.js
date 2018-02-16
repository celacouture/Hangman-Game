//Hangman Game 

//Global Variables
//word choices
var wordBank=['texas', 'longhorn', 'armadillo', 'bluebonnet', 'mockingbird','pecanpie', 'austin'];
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins= 0;
var livesLeft=15;

//letters guessed that are not in word
var lettersUsed=[];
//the users guess, made by keying letter
var userGuess;
//computer generates a word from the word bank
var computerPick=wordBank[Math.floor(Math.random()* wordBank.length)];
console.log(computerPick);
//computer displays underscores matching number in word
var underScores=[];
var s;
var html;

//what the computer needs to do
//create underscores for word to be guessed

document.onkeypress=function start (){
   
      for (var i = 0; i<computerPick.length; i++)
       {
           underScores[i]='_';
       }
   
    s=underScores.join(" ");
   document.getElementById('blanks').innerHTML = s;
   
   document.getElementById('guesses').textContent=livesLeft;

//what the user needs to do

document.onkeyup =function (event)
{
    userGuess = event.key;

    if(computerPick.indexOf(userGuess) > -1){
        for(var i =0; computerPick.length; i ++)
        {
            if(computerPick[i] === userGuess)
            {
                underScores[i]=userGuess;
            }
        }
    }
    else
    {
        lettersUsed.push(userGuess);
        livesLeft --;
        console.log(userGuess);
    }
}

//if they win
 


//if they loose

//reset the game
}
