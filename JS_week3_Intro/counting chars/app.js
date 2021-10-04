let userInput = prompt("Please type something!");
let counter = 0;

userInput.split("").forEach((e) => {
   if(e === ' '){
      counter
   } else {
      counter++
   }
});

let output = `Your input is ${userInput} and has ${counter} characters.`;
console.log(output)