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
var scores, roundScores, activePlayer, dice;

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

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);


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

document.querySelector('#current-' + activePlayer).textContent = dice;

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
console.log(x);
//-----------------------------------------------------------------------------------------------------------


// USING QUERY SELECTOR TO CHANGE CSS :-
//=========================================
//=========================================
// Using CSS 'display: none;' to hide the dice at the start of the game.
// Selects 'dice' html class

// --------------------- styleMethod => CSSproperty => CSSattribute
document.querySelector('.dice').style.display = 'none';


























