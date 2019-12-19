/********************** HARD_MODE  -  GAME_RULES ****************************
*   
*   1. A player looses his ENTIRE score when he/she rolls two 6's in a row. After that, it's the next players turn
* HOW WAS THIS IMPLEMENTED?

* - first i declared a variable called 'lastDice' as an external variable in the GLOBAL SCOPE
* - then i set the 'lastDice' var equal to 'dice' var at THE END of the dice logic statements 
* - It needs to be a GLOBAL var because:
* - On the first roll the value of 'dice' will be stored in the 'lastDice' variable
* - THEN on the next roll the 'dice' value will change and because the code hasn't reached the part where the 'dice' value is set      to the 'lastDice' value yet... I am able to compare the two!
* 
*   ------------------->
*   2. There is an input field in the HTML where players can set the winning score, rather then the pre-defined score pf 100.
* HOW WAS THIS IMPLEMENTED?

* - First created the input box with HTML & CSS
* - Then used '.value' method to read value of input field and store value in var called 'input'.
* - var input = document.querySelector('.final-score').value;
* - Then the 'input' var's value is set to a var called 'winningScore'
* - ...After which i am able to var 'winningScore' to set the conditions of my game! Noice!!!
*
*   ------------------->
*   3. There is another dice added to the game. The player looses his current score when one of them is a 1.
* HOW WAS THIS IMPLEMENTED?

* - First i added a second 'src' attribute in the HTML to display a second dice img
* - Then aligned them to center in CSS
* - Then i had to change all the DOM.querySelector.style.display = 'none'; lines to : 
*   document.getElementById(dice-1).style.display = 'none'; Because i had to hide both the dice images and had to do that with          'getElemntById' DOM Methods
* - Then i created two variables 'dice1' and 'dice2' for storing the random MATH methods number
* - I could then use those two variables to implement the logic for the game rule 'if one dice rolls a 1 then current score is         lost'.
* - EASY!
*
*******************************************************************************
*/

var scores, roundScores, activePlayer, gamePlaying, lastDice;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // 1. Random DICE number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display number as dice img
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

    if (dice1 !== 1 && dice2 !== 1) {
      // Add score
      roundScore += dice1 + dice2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});
/*

    // 3. Update the round score IF player didn't roll a 1
    if (dice === 6 && lastDice === 6) {
        scores[activePlayer] = 0;
        document.querySelector("#score-" + activePlayer).textContent = '0';
        nextPlayer();
    } else if (dice !== 1) {
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
    lastDice = dice;
  }
});
*/

// Implementing the 'HOLD' Feature
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add roundScore to globalScore
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // '.value' JS in-built method reads the value of an input field for me.
    var input = document.querySelector(".final-score").value;
    var winningScore;

    // All the values of undefined (0, "", or null) are type_coerced into false
    // Anything else is coerced to true
    // Therefore 'if(input)' really says -> 'if input is true'
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next Player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  // Erase roundScore to 0 if player rolls a 1:
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // Used 'toggle' method to add 'active' class if not there but if it IS there then remove it.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // If '1' is rolled then remove dice img until player clicks 'roll' again.
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}

// New Game - has 'init' function passed into it
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
  // Sets initial scores to 0 at game start.
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // Sets default names
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  // Removes 'winner' class from previous game
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  // Removes 'active' class from previous game
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  // Finally, add 'active' class back to player 0 as it should be by default
  document.querySelector(".player-0-panel").classList.add("active");
}
