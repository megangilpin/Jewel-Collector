// Array of id's for random numbers to be assigned to
var jewelArr = ["#bluejewel", "#greenjewel", "#pinkjewel", "#purplejewel"]

var compRanNum = largeRanNum()

var bttnRanNum = smallRanNum()

// creates an object that sets up all components of the game
function setupGame(num1, num2){
  var game = {
    losses:0,
    wins: 0,
    compNum: num1, //will call the function that assigns the random number from the large num function
    playerNum: 0,
    bttnNums: num2, //will call the function that assigns the random number values to the button id's
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
function jewelGenerator(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        $(arr[i]).val(num);
        // $(arr[i]).append(jewel)
console.log(arr[i].val(num))
}
 

// writes larger random number to the compnum div
// $("#compnum").text(function () {
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
    }
// jewel.attr("random-num", ranArr[0]);
// console.log("jewel: ",jewel);
// }


jewelGenerator(jewelArr)

// adds jewel's random number attribut to the playerNum
$(".bttn").on("click", function () {
    num += $(this).val();
    $("#player-num").text(num);
});



//checks if player has won

// checks if player has lost

// new game - resets random numbers and sets user score to 0


