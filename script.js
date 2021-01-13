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


//randomize het rollen --> of const of let
const rollDice = document.querySelector(".btn--roll");
const dicePicture = document.querySelector(".dice");
const elementCurrentScorePlayerZero = document.querySelector("#current--0");
const elementCurrentScorePlayerOne = document.querySelector("#current--1");



let currentScorePlayerZero = 0;
let currentScorePlayerOne = 0;



let activePlayer = 0;
let turn = 0;



rollDice.addEventListener("click", function() {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    dicePicture.src = `dice-${diceNumber}.png`; //template literal
//Zet de current omhoog met het gegooide getal
    turnJe(diceNumber);

//als speler 0 aan de beurt dan
//anders tel je het bij de andere speler op

//Wie er aan de beurt is

//

})



function turnJe(diceNumber){
console.log(diceNumber);
    if (turn % 2 == 0){
currentScorePlayerZero += diceNumber;
        elementCurrentScorePlayerZero.textContent = currentScorePlayerZero; //zoek het verschil tussen innerHTML en textContent
    } else {
currentScorePlayerOne += diceNumber;
        elementCurrentScorePlayerOne.textContent = currentScorePlayerOne;
    }
turn++; //alleen als 1 gegooid wordt OF iemand op hold klikt
}

