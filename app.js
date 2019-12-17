// CREATING FUNDAMENTAL GAME VARIABLES:
//=========================================
//=========================================


// Creating the fundamental variables of the game - Keeps track of scores:
/*
- Could write:
score 1 = 0;
score 2 = 0;
But to keep code DRY will store scores in an array instead...
*/
var scores, roundScores, activePlayer;

scores = [0,0];
roundScore = 0;
// Keeps track of current player so code knows who to assign score to. 0 = 1st player | 1 = 2nd player
// Will use 'activePlayer' var to assign values to 'scores' var
activePlayer = 0;


// GENERATING A RANDOM NUMBER FOR DICE
//=========================================
//=========================================
//-----------------------------------------------------------------------------------------------------------
// To calculate dice need to generate a random number
// Math.random gives me random numbers. Need to * by 6 to get a number between 0 & 5
// To get an integer i need to use '.floor' to round the dec number. 
// = Math.floor(Math.random)
// This gives num between 0 & 5 though but i need 1 to 6. Therefore need to add 1 :-
// = Math.floor(Math.random) + 1
//-----------------------------------------------------------------------------------------------------------

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);


// DOM MANIPULATION 1  ----SETTER----
// REPLACING PLAYERS CURRENT SCORE WITH GENERATED NUMBER
//=========================================
//=========================================
//-----------------------------------------------------------------------------------------------------------
// Use 'document' object to access webpage elements and 'querySelector'  to access a specific element.
// HOW TO USE QUERY SELECTOR?
// Same way as css uses property selectors except issue is that query selector only grabs the FIRST element.
//-----------------------------------------------------------------------------------------------------------

// Selecting the game score (dice value) and replacing it with current value of dice.
// 1. Insert the HTML id assigned to score.
// 2. Use '.textContent' method to change text content (current score) of webpage. 

// document.querySelector('#current-0').textContent = dice;

// 'current-0' only assigns value to 1st player though, to write it more dynamcally so that value is assigned to BOTH players (depending who is activePlayer) I can do:

// document.querySelector('#current-' + activePlayer).textContent = dice;

//-----------------------------------------------------------------------------------------------------------
// 'textContent' method only uses plain text. IF i wanted to style it up with HTML i could use 'innerHTML' method instead
// When passing HTML to innerHTML method - need to use string or JS will think its JS code.
// emphasizes score number :-
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
//-----------------------------------------------------------------------------------------------------------


// READING THE DOM ----GETTER----
//=========================================
//=========================================
//-----------------------------------------------------------------------------------------------------------
// Can also read DOM elements for the purpose of storing them in a variable!

// READS whatever textContent is inside of the HTML div '#score-0' and STORES it inside of 'var x'
var x = document.querySelector('#score-0').textContent;
// console.log(x);
//-----------------------------------------------------------------------------------------------------------


// USING QUERY SELECTOR TO CHANGE CSS :-
//=========================================
//=========================================
// Using CSS 'display: none;' to hide the dice at the start of the game.
// Selects 'dice' html class

// --------------------- styleMethod => CSSproperty => CSSattribute
document.querySelector('.dice').style.display = 'none';

// Sets initial scores to 0 at game start.
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// SETTING UP AN EVENT HANDLER & CALLBACK FUNCTIONS:-
//=========================================
//=========================================

// function btn() {
//     //Do something here
// }
// btn();

// addEventListener takes two arguments: 1.The event listener 'click' 2. The event (function to call when event listener triggers)
// CALLBACK FUNCTION: all it is, is just a function that is called from another function like below.

// document.querySelector('.btn-roll').addEventListener('click', btn)

// -------------------

// ANONYMOUS-FUNCTION: a function without a name. It is written inside of a context and can't be called from outside of that context. 
// - Use anonymous functions for event listners. (When you only need to use it once)
// E.g below: Function written inside of the event listener:
document.querySelector(".btn-roll").addEventListener("click", function() {
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. Display dice img depending on number generated.
    // Stores the 'dice image' DOM element in variable so only have to query select it ONCE. Can just 'diceDOM' after that.
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    // GREAT TRICK FOR DYNAMICALLY DISPLAYING IMAGES :-
    // Images are named all same but with diff' numbers. Therefore below calls for image depending on what number is rolled (1 - 6) which can then match the same name as a picture (named dice-1 to dice-6)
    diceDOM.src = 'dice-' + dice + '.png'
    //3. Update round score IF the rolled number was NOT a 1 (cause' if 1 it is 'bust' & next players turn.)
    if (dice !== 1) {
        // Add score
        // same as roundScore = roundScore + dice
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next Player
        nextPlayer()
    }
});

// Implementing the 'HOLD' Feature

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add roundScore to globalScore
    // scores array is [0,0]. elements 0 & 1 cause' of 0 index counting. Therefore can use active 'activePlayer' to select the index in the array. Once selected it then adds the 'roundScore' to the array.
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    // Check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector("#name-" + activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        nextPlayer()
    }
})


function nextPlayer() {
    // Next Player
    // If activePlayer = 0 then change activePlayer to 1 - and vicaversa
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // Erase roundScore to 0 if player rolls a 1:
    document.getElementById('current-0').textContent = '0';
    document.getElementById("current-1").textContent = "0";

    // Used 'toggle' method to add 'active' class if not there but if it IS there then remove it.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    // If '1' is rolled then remove dice img until player clicks 'roll' again.
    document.querySelector('.dice').style.display = 'none';
}





















