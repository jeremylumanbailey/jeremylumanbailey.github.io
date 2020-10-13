"use strict";

var currentState = 0;
var state = [""];
var currentOutput = window.document.getElementById("userOutput");

function addToState() {
  currentState++;
  state[currentState] = document.getElementById("userOutput").value;
}

currentOutput.addEventListener("input", (event) => {
  addToState();
});

function undoLastAction() {
  if (currentState > 0) {
    currentState--;
    document.getElementById("userOutput").value = state[currentState];
  }
}

function convertToUppercase() {
  let x = document.getElementById("userInput").value;
  document.getElementById("userOutput").value = x.toUpperCase();
  addToState();
}

function convertToLowercase() {
  let y = document.getElementById("userInput").value;
  document.getElementById("userOutput").value = y.toLowerCase();
  addToState();
}

function convertEachLetter() {
  let y = document.getElementById("userInput").value;

  const isLowerCase = (char) => char.toLowerCase() === char;

  const swapCase = (char) =>
    isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

  let alternateCase = (string) => {
    return [...string].map(swapCase).join("");
  };

  document.getElementById("userOutput").value = alternateCase(y);
  addToState();
}
