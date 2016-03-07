$(document).ready(function() {
   
    
    var randomNumber = Math.floor(Math.random() * 100);
    var userGuess = undefined;
    var difference = undefined;
    var guessCount = 0;
    var wonGame = false;

    /*--- Generate a random number ---*/
    var generateNewNumber = function(){
        randomNumber = Math.floor((Math.random()*101)+1);
        console.log("randomNumber is " +randomNumber);
    };

    console.log(randomNumber);

       /*user guess*/

    $("#guessButton").click(function(event) {
        event.preventDefault();
        if (wonGame === false) {
        userGuess = +$("#userGuess").val();
        console.log(userGuess);
        difference = Math.abs(userGuess - randomNumber);

        console.log(difference);
        if (userGuess % 1 !== 0 || userGuess > 100 || userGuess < 0) {
            alert("Not a valid number");
            return(false);
        } else {
            event.preventDefault();
            $(".guessBox").append("<li>" +userGuess+ "</li>");
            clearGuess();
            guessCount();
            checkTemperature();
        }
    } else {
        AddFeedback("You already won! Start a new game.");
    }


    });

    

    /*How far is the guess*/

    var checkTemperature = function() {

        if (difference === 0){
             AddFeedback("You Win!"); 
             wonGame = true;
        } else if (difference < 25) {
             AddFeedback("Hot!");
        } else if (difference < 50) {
             AddFeedback("Warm");
        } else if (difference < 75) {
            AddFeedback("cool");
        } else {
            AddFeedback("cold");
        }
    
    };


   
    /*--- Clear guess text section ---*/
     var clearGuess = function() {
        $("#userGuess").val("").focus();
    };

    /*--- Remove past Guesses ---*/
    var removePastGuesses = function() {
        $("#guessList").remove();
    };

      /*--- Display the number of guesses ---*/
    var guessCount = function() {
       $('#count').text( ( parseInt( $('#count').text() ) + 1));
    };

       /*--- Display the Feedback ---*/
    var AddFeedback = function(feedback) {
         $("#feedback").text(feedback);
    };
     

    /*-- "+ New Game" click to reset --*/
    $(".new").click(function(){
        generateNewNumber(); 
        clearGuess();
        $('#count').text(0);
        wonGame = false;
        removePastGuesses();
        AddFeedback("Make your guess!");
    });

     

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    /* start new game when clicking new game*/
    $(".new").click(function() {


    });

});