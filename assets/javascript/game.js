// GLOBAL VARIABLES
//======================================================================
var randomNumber = document.getElementById("randomNumber");
console.log("Your Lucky Number is: " + randomNumber);
randomNumber.value = getRandomInt(19, 120);
console.log(randomNumber.value);
$(randomNumber).html(randomNumber.value);

// RUBY
var ruby = document.getElementById("ruby");
console.log(ruby);
ruby.value = getRandomInt(1, 12);
console.log(ruby.value);

// Diamond
var diamond = document.getElementById("diamond");
console.log(diamond);
diamond.value = getRandomInt(1, 12);
console.log(diamond.value);

//Amber
var amber = document.getElementById("amber");
console.log(amber);
amber.value = getRandomInt(1, 12);
console.log(amber.value);

//Emerald
var emerald = document.getElementById("emerald");
console.log(emerald);
emerald.value = getRandomInt(1, 12);
console.log(emerald.value);


//Game Counters

var winCount = document.getElementById("winCount");
// console.log(winCount);
winCount.value = 0;
// console.log(winCount.value);
$(winCount).html(winCount.value);

var lossCount = document.getElementById("lossCount");
// console.log(lossCount);
lossCount.value = 0;
// console.log(lossCount.value);
$(lossCount).html(lossCount.value);

var userScore = 0;
var userScoreDisplay = document.getElementById("userScore");
// console.log(userScore);


// FUNTIONS (Reusalbe blocks of code that I will call upon when needed)
//======================================================================
function startGame() {

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function result() {
    if (userScore == randomNumber.value) {
        winCount.value++;
        $(winCount).html(winCount.value);
        console.log("you won!!!")
        alert ("you won!!!");
        reset();
    } else if (userScore > randomNumber.value) {
        lossCount.value++;
        $(lossCount).html(lossCount.value);
        console.log("please try again")
        alert ("please try again");
        reset();
    }
}





// MAIN PROCESS
//======================================================================

$(".crystal").on("click", function() {
    // console.log(this + "hello")
    // console.log(this.value + "howdy")
    var crystalValue = parseInt(this.value);
    console.log(crystalValue);
    userScore += crystalValue;
    console.log(userScore);
    $(userScoreDisplay).html(userScore);
    result();

})

//if userScore matches randomNumber ++ 1 winsCount
//console.log()
//if userScore exceeds randomNumber ++ 1 lossCount
//console.log()
//reset userScore, randomNumber, ruby, diamond, amber, emerald
//console.log()

//Reset
function reset() {
    randomNumber.value = getRandomInt(19, 120);
    console.log(randomNumber.value);
    $(randomNumber).html(randomNumber.value);

    ruby.value = getRandomInt(1, 12);
    console.log(ruby.value);

    diamond.value = getRandomInt(1, 12);
    console.log(diamond.value);

    amber.value = getRandomInt(1, 12);
    console.log(amber.value);

    emerald.value = getRandomInt(1, 12);
    console.log(emerald.value);

    userScore = 0;
}



//Testing/Debugging


//Arrays and Variables for holding data
