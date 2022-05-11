<?php
echo "Welcome to the dice roll game\n";
$guess = -1;//just to declare guess so that it will loop
while($guess != null){//run until the user inputs empty line
	$guess = readline("\nPlease enter your guess: ");//get user input
	//echo "\nYou guessed $guess";
$roll = rand(1,10);//create random integer 1 to 10
if($roll == $guess){//compare random int and roll
        echo "\nYou guessed right!\n";
}
else{
        echo "\nSorry, the roll was a $roll\n";
}
}
echo "\nThanks for playing!!\n"; //program is finished

