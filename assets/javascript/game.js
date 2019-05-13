// Arrya of number to be assigned to comp and jewels
var numArr = [1, 2, 3, 4]

// Creates random computer number from 120 -19
$("#compnum").text(function () {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
});

// creates an array of 6 random numbers to be used for the random comp # and 4 jewel numbers
function ranNumGenorator(arr) {
    var ranNumArr = [];
    for (var i = 0; i < arr.length; i++) {
        var random = Math.floor(Math.random() * 12)+1;
        ranNumArr.push(random)
    }
    console.log(ranNumArr)
    return ranNumArr
}


// adds random number from jewel clicks.  takes two paramaters




//checks if player has won

// checks if player has lost

// new game - resets random numbers and sets user score to 0


