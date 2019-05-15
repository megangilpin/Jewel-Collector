// Array of id's linked to jewels for random numbers to be assigned to
var jewelArr = ["#blue-jewel", "#green-jewel", "#pink-jewel", "#purple-jewel"]


// game attributes
var wins = 0;
var losses = 0;
var compNum = 0;
var playerNum = 0;

// sets up all the game attributes
function setupGame(arr) {
    compNum = largeRanNum();
    playerNum = 0;
    jewelGenerator(arr);
    $("#comp-num").text(compNum);
    $("#player-num").text(playerNum);
}

// Creates random number from 19-120 to be used as the computer's random number
function largeRanNum() {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

// Creates random number from 1-12 to be used as the player's random number
function smallRanNum() {
    return Math.floor(Math.random() * 12) + 1;
}

// Assigns an array of id's used on each jewel to a random number
function jewelGenerator(arr) {
    for (var i = 0; i < arr.length; i++) {
        $(arr[i]).attr("jewel-number", smallRanNum());
    }
}

// On jewel click changes attribute(always a string) into an integer then adds the integer to the player score then checks if player has won or lost
$(".bttn").on("click", function () {
    var jewelValue = ($(this).attr("jewel-number"));
    jewelValue = parseInt(jewelValue);

    playerNum += jewelValue;

    $("#player-num").text(playerNum);

    // checks if playerNum equals compNum if true adds to wins counter and alerts player they won
    if (playerNum === compNum) {
        wins += 1;
        $("#wins").text(wins);
        alert("You win all the Jewels");
        setupGame(jewelArr);
    }

    // checks if playerNum is bigger than compNum if true adds to losses counter and alerts player they lost
    else if (playerNum >= compNum) {
        losses += 1;
        $("#losses").text(losses);
        alert("You lose! No Jewels for you!");
        setupGame(jewelArr);
    }
});

// starts game
$("#new-game").on("click", function () {
  setupGame(jewelArr)
  wins = 0;
  losses = 0;
  $("#wins, #losses").empty();
});