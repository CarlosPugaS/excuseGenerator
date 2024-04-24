/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuse = document.getElementById("excuse");
  let frase = "";
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  let whotext = who[whoIndex];
  let actiontext = action[actionIndex];
  let whattext = what[whatIndex];
  let whentext = when[whenIndex];

  frase += whotext + actiontext + whattext + whentext + " ";

  excuse.textContent = frase;
  excuse.style.fontSize = "50px";
  excuse.style.textAlign = "center";
  console.log(frase);
};
