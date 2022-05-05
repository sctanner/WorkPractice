var dice = {//dice object with sides an roll function
    sides: 10,//declare sides of dice
    roll: function(){//generates random number 1-10
        var randnum = Math.floor(Math.random() * this.sides)+1;// +1 because floor rounds down
        return randnum;//return the random number
    }
}

function printResult(number, oMessage){
    
    var message = document.getElementById("roll").innerHTML = oMessage + number;
};



var oMessage = document.getElementById("roll").innerHTML;
var button = document.getElementById("button");//get the button
button.onclick = function(){//when button is clicked...
    document.getElementById("welcome").innerHTML =  "Click the button to roll again...";
    
    var number = dice.roll();
    printResult(number, oMessage);
    



}  




