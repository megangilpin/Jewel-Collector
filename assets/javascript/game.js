// Array of id's for random numbers to be assigned to
var jewelArr = ["#blue-jewel", "#green-jewel", "#pink-jewel", "#purple-jewel"]

// creates an object that sets up all components of the game
function setupGame(arr){
  var game = {
    losses:0,
    wins: 0,
    compNum: largeRanNum(),
    playerNum: 0,
    bttnNum: jewelGenerator(arr), 
  };
  return game
}

// Creates random number from 19-120 to be used as the computer's random number
function largeRanNum(){
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

// Creates random number from 19-120 to be used as the computer's random number
function smallRanNum() {
    return Math.floor(Math.random() * 12) + 1;
}

// Assigns an array of id's used on each jewel to a random number
function jewelGenerator(arr) {
    for (var i = 0; i < arr.length; i++) {
        $(arr[i]).attr("jewel-number", smallRanNum());
    }
}

// adds jewel's random number attribute to the playerNum

var round = setupGame(jewelArr)
console.log(round)

$("#comp-num").text(round.compNum)

function playerScore(game){
    game.playerNum += $(this).attr;
    console.log(game.playerNum)
    return game.playerNum;
}

$(".bttn").on("click", function () {
    var jewelValue = ($(this).attr("jewel-number"));
    jewelValue = parseInt(jewelValue);

    round.playerNum +=
  
    playerScore(game);
    $("#player-num").text(game.playerNum);
});

//checks if player has won

// checks if player has lost

// new game - resets random numbers and sets user score to 0




// writes larger random number to the comp-num div
// $("#comp-num").text(function () {
//     return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// });

// creates an array of 4 random numbers to be used for the 4 jewel numbers
// function ranNumArr(arr) {
//     var ranNumArr = []
//     for (var i = 0; i < arr.length; i++) {
//         var random = Math.floor(Math.random() * 12)+1;
//         ranNumArr.push(random)
//     }
//     console.log(ranNumArr)
//     return ranNumArr
// };


// function setupGame(arr) {
//     var game = {
//         losses: 0,
//         wins: 0,
//         compNum: largeRanNum(), //will call the function that assigns the random number from the large num function
//         playerNum: 0,
//         bttnNum: jewelGenerator(arr), //will call the function that assigns the random number values to the button id's
//     };
//     return game
// }