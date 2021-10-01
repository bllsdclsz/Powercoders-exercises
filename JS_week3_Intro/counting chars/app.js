let userInput = prompt("Please type something!");
let lengthOfInput = userInput.length;
let output = `Our input is ${userInput} and has ${lengthOfInput} characters.`;

if(userInput != null && userInput != ""){
   console.log(output);
}else{
   console.log("You didn't type anything");
}
