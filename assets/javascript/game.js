

//word choices



var words = ["texas", "longhorn", "armadillo", "pecan-tree", "austin", "the-lone-star-state", "bluebonnet", "mockingbird", "texas-horned-toad"];
var chooseWord=words[Math.floor(Math.random() * words.length)];
    console.log(chooseWord);
var answerBlanks;
var userGuess;
var storedGuesses=[];
var livesLeft=20;
var wins=0;

//the user starts the game, 
document.onkeyup = function () {
    var userStart = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userStart);

    answerBlanks=document.getElementsByClassName("blanks");
    correct = document.createElement('ul');

        for (var i=0; i<chooseWord.length; i++){
            correct.setAttribute('id', 'word');
            userStart = document.createElement('li');
            userStart.setAttribute('class', 'userGuess');
            if (chooseWord[i]==="-"){
                
            }

        }
    }
}

//the computer picks a word and the blanks are displayed to the document





//the player quesses a letter, the letter goes into word or into letters guessed section



//the players wins are tallied

//the number of guesses goes down

//player guesses word picture is revealed

function imgDisplay(){
    document.getElementById("bluebonnet").style.display="none";
}



