// Array of id's linked to jewels for random numbers to be assigned to
var jewelArr = ["#blue-jewel", "#green-jewel", "#pink-jewel", "#purple-jewel"]


// creates object of game attributes
    var round = {
        wins: 0,
        losses: 0,
        compNum: largeRanNum(),
        playerNum: 0,
        bttnNum: jewelGenerator(jewelArr),
    };


// sets up game
function setupGame(arr){
  var newGame = 
    bttnNum = jewelGenerator(arr);
    compNum = largeRanNum();
    playerNum = playerNum;
  }

// Creates random number from 19-120 to be used as the computer's random number
function largeRanNum(){
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

$("#comp-num").text(round.compNum)

$("#wins").text(round.wins)

$("#losses").text(round.losses)

$("#player-num").text(round.playerNum)


// On jewel click changes attribute(always a string) into an integer then adds the integer to the player score then checks if player has won or lost
$(".bttn").on("click", function () {
    var jewelValue = ($(this).attr("jewel-number"));
    jewelValue = parseInt(jewelValue);

    round.playerNum += jewelValue;

    $("#player-num").text(round.playerNum);

    // $("#")

    if (round.playerNum === round.compNum) {
        round.wins += 1;
        $("#wins").text(round.wins);
        alert("You win all the Jewels");
        round.compNum = largeRanNum();
        round.bttnNum = jewelGenerator(jewelArr);
    }

    else if (round.playerNum >= round.compNum) {
        round.losses += 1;
        $("#losses").text(round.losses);
        alert("You lose! No Jewels for you!");
    }

});

// new game - resets random numbers and sets user score to 
$("#new-game").on("click", function () {
    var round = setupGame(jewelArr)

    $("#comp-num").text(round.compNum)

    $("#player-num").text(round.playerNum)

    $("#wins").text(wins)

    $("#losses").text(losses)
});

// var round = setupRound(jewelArr)

    // var wins = 0
    // var losses = 0
    // var compNum = largeRanNum()
    // var playerNum = 0
    // var bttnNum = jewelGenerator(jewelArr)

// // sets up game
// function setupGame(arr, win, losses) {
//     var newRound = {
//       compNum: largeRanNum()
//       wins: win,
//       losses: losses,
//       round: setupRound(jewelGenerator(arr)),
//     }
//     return newRound
// }