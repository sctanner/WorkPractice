var dice = {//dice object with sides an roll function
    sides: 10,//declare sides of dice
    roll: function(){//generates random number 1-10
        var randnum = Math.floor(Math.random() * this.sides)+1;// +1 because floor rounds down
        return randnum;//return the random number
    }
}

function printResult(number, oMessage, result){
    var truth = "wrong :(";
    if(result){
        truth = "right :)"
    }
    document.getElementById("roll").innerHTML = "You rolled a " + number + ". You got it "+ truth;

}

function compareInput(input, number){//
    if(input == number){
        return true;
    }
    else return false;
}

//code starts running here
var oMessage = document.getElementById("roll").innerHTML;
var button = document.getElementById("rollButton");//get the button

button.onclick = function(){//when button is clicked...
    var input = document.getElementById("input1").value;//get user input
    var number = dice.roll();//roll the dice
    document.getElementById("output").innerHTML = "You guessed "+input;
    var result = compareInput(input, number);
    printResult(number, oMessage, result);



}
