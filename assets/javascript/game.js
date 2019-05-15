// Array of id's for random numbers to be assigned to
var jewelArr = ["#blue-jewel", "#green-jewel", "#pink-jewel", "#purple-jewel"]

// var bttnRanNum = smallRanNum()

// creates an object that sets up all components of the game
function setupGame(num1, num2){
  var game = {
    losses:0,
    wins: 0,
    compNum: num1, //will call the function that assigns the random number from the large num function
    playerNum: 0,
    bttnNum: num2, //will call the function that assigns the random number values to the button id's
  };
  return game
}

// Creates random number from 19-120 to be used as the computer's random number
function largeRanNum(){
    var compRanNum =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    return compRanNum;
}

// Creates random number from 19-120 to be used as the computer's random number
function smallRanNum() {
    var ranNum =  Math.floor(Math.random() * 12) + 1;
    return ranNum;
}

// Assigns an array of id's used on each jewel to a random number
function jewelGenerator(arr) {
    for (var i = 0; i < arr.length; i++) {
        $(arr[i]).attr("jewel-number", smallRanNum());
    }
}

jewelGenerator(jewelArr)
console.log(jewelGenerator(jewelArr))


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


// Assigns an array of id's used on each jewel to a random number

// function jewelGenerator(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var jewel = $("<span>");
//         jewel.attr("random-num", Math.floor(Math.random() * 12) + 1);
//         // $("#"+arr[0]+"jewel").append(jewel)
//         $(arr[i]).append(jewel)
// console.log(jewel)
// $('#app').val()
    // }
// jewel.attr("random-num", ranArr[0]);
// console.log("jewel: ",jewel);
// }


// jewelGenerator(jewelArr)

// adds jewel's random number attribute to the playerNum
$(".bttn").on("click", function () {
    num += $(this).val();
    $("#player-num").text(num);
});



//checks if player has won

// checks if player has lost

// new game - resets random numbers and sets user score to 0


