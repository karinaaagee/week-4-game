$(document).ready(function() {
    //display user scoreboard 
    var totalScore = 0;
    $("#ts").text(totalScore);
    var wins = 0;
    $("#timesWon").text(wins);
    var losses = 0;
    $("#timesLost").text(losses);
    
    //select random number
    var randomNumb = Math.floor(Math.random() * 101 + 19)
    $("#random").text(randomNumb)

    //select random number for each crystal
    var blueCrystal = Math.floor(Math.random() * 11 + 1)
    var greenCrystal = Math.floor(Math.random() * 11 + 1)
    var redCrystal = Math.floor(Math.random() * 11 + 1)
    var yellowCrystal = Math.floor(Math.random() * 11 + 1)

    //resets scoreboard
    function reset(){
        totalScore= 0;
        $("#ts").text(totalScore);

        randomNumb = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumb)
        $("#random").text(randomNumb);
        
        blueCrystal = Math.floor(Math.random() * 11 + 1);
        greenCrystal = Math.floor(Math.random() * 11 + 1);
        redCrystal = Math.floor(Math.random() * 11 + 1); 
        yellowCrystal = Math.floor(Math.random() * 11 + 1);
    }
    
    //calculates win to the total score
    function won(){
        alert("You win!");
        wins++;
        $("#timesWon").text(wins);
        reset();
    }

    //calculate losses to the total score
    function loss(){
        alert("You lose, try again!");
        losses++;
        $("#timesLost").text(losses);
        reset();
    }
  
    //clicks crystals to add to total score
    $("#blue").on("click", function() {
        totalScore = totalScore + blueCrystal;
        $("#ts").text(totalScore);
        console.log("Score is: " + totalScore);
       
        if (totalScore === randomNumb){
            won();
        }
        else if (totalScore > randomNumb){
            loss();
        }
    });

    $("#green").on("click", function() {
        totalScore = totalScore + greenCrystal;
        $("#ts").text(totalScore);
        console.log("Score is: " + totalScore);
       
        if (totalScore === randomNumb){
            won();
        }
        else if (totalScore > randomNumb){
            loss();
        }

    });

    $("#red").on("click", function() {
        totalScore = totalScore + redCrystal;
        console.log("score is: " + totalScore);
        $("#ts").text(totalScore);
        
        if (totalScore === randomNumb){
            won();
        }
        else if (totalScore > randomNumb){
            loss();
        }

    });

    $("#yellow").on("click", function() {
        totalScore = totalScore + yellowCrystal;
        console.log("Score is: " + totalScore);
        $("#ts").text(totalScore);

        if (totalScore === randomNumb){
            won();
        }
        if (totalScore > randomNumb){
            loss();
        }
    });



});
