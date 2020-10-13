"use strict";

var obj = {
    value: window.document.getElementById("userOutput"),
    letMeKnow() {
      console.log(`The variable has changed to ${this.testVar}`);
    },
    get testVar() {
      return this.value;
    },
    set testVar(value) {
      this.value = value;
      this.letMeKnow();
    }
  }

var state = []
var currentOutput = window.document.getElementById("userOutput"); 



currentOutput.addEventListener('input', (event) => {
    // var val = document.getElementById("userOutput").value;
    // if(val) { 
        
        console.log(state);
    // }
    
})

function undoLastAction() {
    document.getElementById("userOutput").value = state[state.length];
}

function convertToUppercase() {
  let x = document.getElementById("userInput").value;
  document.getElementById("userOutput").value = x.toUpperCase();
}

function convertToLowercase() {
  let y = document.getElementById("userInput").value;
  document.getElementById("userOutput").value = y.toLowerCase();
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
}
