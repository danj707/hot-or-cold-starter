//GAME PATH
//initial page load, or user clicks 'new game'
//generate secret number
//user enters guess, get users guess from form
//compare to secret number
//give feedback on how close
//increment guess counter
//put last guess on the bottom row - push to array
//clear guess textbox, ready for next guess

//***user can click 'new game' at any time
//***user can click 'what' at any time

$(document).ready(function () {

    //modal box stuff
    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

    /*--- Hide information modal box ---*/
    $(".new").click(function () {
        //newGame();
    });

    newGame();

    //guessCounterIncrement(count); // track the number of guesses
    //getGuess(userGuess);
    //arrayCounter(userGuess, guessArr);
    //compareGuess(userGuess);

});

//define globals
var userGuess = 0;
var guessArr = [];
var count = 0;
var secretNumber = 0;

//function definitions

//generate a secret number, 1-100
function newGame() {
    genSecret();
}

function genSecret() {
    secretNumber = Math.floor((Math.random() * 100)) + 1;
    console.log("SN: " + secretNumber);
    return secretNumber;
}

//get the guess from the form
function getGuess(userGuess) {
    //   $("form").submit(function (event) {
    event.preventDefault();
    userGuess = Math.floor($("input#userGuess").val()); //grab val and get the integer
    return userGuess;
    //  });
}

//compare the guess to the secret number
function compareGuess() {
    //compare goodness in here later
}

//increments the 'guess counter' - how many guesses have been made
function guessCounterIncrement(count) {
    $("span#count").replaceWith('<span id="count">#' + count + '</span>');
    count++;
    console.log(count);
    return count;
}

//takes an array, pushes on the last guess to keep track of and display
function arrayCounter(userGuess, guessArr) {
    guessArr.push(userGuess);
}
