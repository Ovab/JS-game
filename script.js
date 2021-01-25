"use strict";
/* Hold-knop => current naar Player
* Roll-dice => picture randomize (if 1 then switch and current leegmaken , anders doorgaan)
* Switch player => kleur veranderen, zie bovenstaande (current andere leeghalen etc)
* Roll-dice => ook dat plaatje aanpassen
* Stop game => als de limiet bereikt ism dan winnaar aanwijzen.
* New game => game reset / variabelen reset (page refreshen (game reset worden))
* Highscore bijhouden?
*
* REFACTOREN!
*/
const rollDice = document.querySelector(".btn--roll");
const dicePicture = document.querySelector(".dice");
const elementCurrentScorePlayerZero = document.querySelector("#current--0");
const elementCurrentScorePlayerOne = document.querySelector("#current--1");
const elementBankScorePlayerOne = document.querySelector("#score--0");
const elementBankScorePlayerTwo = document.querySelector("#score--1");
const backgroundPlayerOne = document.querySelector(".player--0");
const backgroundPlayerTwo = document.querySelector(".player--1");
const holdButton = document.querySelector(".btn--hold");
const newgame= document.querySelector(".btn--new")


let currentScorePlayerZero = 0;
let currentScorePlayerOne = 0;
let bankScorePlayerZero = 0;
let bankScorePlayerOne = 0;



let activePlayer = 0; //Player One Starts



rollDice.addEventListener("click", function(){
const diceNumber = Math.trunc(Math.random() * 6 + 1);
    dicePicture.src = `dice-${diceNumber}.png`; //template literal
//Zet de current omhoog met het gegooide getal
    if (diceNumber === 1){
        switchActivePlayer();
        setCurrentScore();
    } else {
    addToCurrentScoreActivePlayer(diceNumber);
    }
});

newgame.addEventListener("click", function() {
    if (activePlayer===1){
        switchActivePlayer()
    }
    init()
})

holdButton.addEventListener("click", function() {
//verplaats currentscore naar bank
    if(activePlayer === 0){
        bankScorePlayerZero += currentScorePlayerZero;
        elementBankScorePlayerOne.textContent = bankScorePlayerZero;
    } else {
        bankScorePlayerOne += currentScorePlayerOne;
        elementBankScorePlayerTwo.textContent = bankScorePlayerOne;
    }
    switchActivePlayer();
    setCurrentScore();
    isWinner();
});



function isWinner (){
if (bankScorePlayerZero >= 50 || bankScorePlayerOne >= 50) {
//winner
//reset game
    init();

}
}


function init(){
    currentScorePlayerZero = 0;
    currentScorePlayerOne = 0;
    bankScorePlayerZero = 0;
    bankScorePlayerOne = 0;
    activePlayer = 0;


    elementCurrentScorePlayerZero.textContent = 0;
    elementCurrentScorePlayerOne.textContent = 0;
    elementBankScorePlayerOne.textContent = 0;
    elementBankScorePlayerTwo.textContent = 0;


}
function switchActivePlayer(){
    activePlayer = (activePlayer === 0) ? 1 : 0; //ternary
    currentScorePlayerZero = 0; currentScorePlayerOne = 0;
    backgroundPlayerOne.classList.toggle("player--active");
    backgroundPlayerTwo.classList.toggle("player--active");
}



function setCurrentScore(){
elementCurrentScorePlayerZero.textContent = currentScorePlayerZero;
    elementCurrentScorePlayerOne.textContent = currentScorePlayerOne;
}



function addToCurrentScoreActivePlayer(diceNumber){
(activePlayer === 0) ? currentScorePlayerZero += diceNumber : currentScorePlayerOne += diceNumber;
    setCurrentScore();
}