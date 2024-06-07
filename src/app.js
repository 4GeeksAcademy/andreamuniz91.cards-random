/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  newCard();
};
function newCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K",];    
  
  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  document.querySelector("#top").innerHTML = suits[indexSuits];
  document.querySelector("#number").innerHTML = numbers[indexNumbers];
  document.querySelector("#end").innerHTML = suits[indexSuits];

  let colorSuit = (suits[indexSuits] == "♦" || suits[indexSuits] == "♥") ? "text-danger" : "text-dark";
  document.querySelector("#top").className = colorSuit;
  document.querySelector("#number").className = colorSuit;
  document.querySelector("#end").className = colorSuit;
}
