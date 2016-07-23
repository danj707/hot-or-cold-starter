///////////////////////
//function definitions
///////////////////////

var count = 0;

function newGame() {
    //make the secret number, 1-100
    var secretNumber = Math.floor((Math.random() * 100)) + 1;

    //get the player's guess
    $("form").submit(function (event) {
        event.preventDefault(); //dont submit to server
        var userGuess = parseInt($("input#userGuess").val(), 10); //grab val and get the integer

        //check for validation, return false if failed
        if (validateInput(userGuess)) {
            compareGuess(userGuess, secretNumber);

            $("ul#guessList").append("<li>" + userGuess + "</li>"); //append the last guess to the list

        } else {
            alert("Sorry, you didn't enter a valid number. 1-100, no letters or words. Try again.")
        }

        //increment the counter even if check failed, still a guess
        count++;
        $("span#count").html(count); //html
    });
}

function validateInput(userGuess) {
    if (isNaN(userGuess)) {
        return false;
    }
    if (typeof userGuess !== 'number') {
        return false;
    }
    if (userGuess > 100) {
        return false;
    }
    return true;
}

function compareGuess(userGuess, secretNumber) {

    var testNum = Math.abs(userGuess - secretNumber);

    if (testNum >= 50) {
        $("h2#feedback").html("Ice cold!").css("background", "#67f1e2"); //html
    }
    if ((testNum < 50) & (testNum >= 40)) {
        $("h2#feedback").html("Thawing!").css("background", "#9ab2e8"); //html
    }
    if ((testNum < 40) & (testNum >= 30)) {
        $("h2#feedback").html("Lukewarm").css("background", "#d9c3aa"); //html
    }
    if ((testNum < 30) & (testNum >= 20)) {
        $("h2#feedback").html("Getting hotter").css("background", "#ffbb5e"); //html
    }
    if ((testNum < 20) & (testNum >= 10)) {
        $("h2#feedback").html("Hot").css("background", "#ff8a00"); //html
    }
    if ((testNum < 10) & (testNum >= 5)) {
        $("h2#feedback").html("Super hot!").css("background", "#ff5200"); //html
    }
    if ((testNum < 5) & (testNum >= 1)) {
        $("h2#feedback").html("OMG almost there!").css("background", "#ef1717"); //html
    }
    if (testNum === 0) {
        $("h2#feedback").html("Guessed it!").css("background", "red");
    }
}

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
        location.reload(); //reload the page on new game click
    });

    newGame(); // run the game

});
