let userInput = document.querySelector("input");
let sec = document.querySelector("#sec");
let fiveMin = document.querySelector("#five-min");
let fifteenMin = document.querySelector("#fifteen-min");
let twentyMin = document.querySelector("#twenty-min");
let oneHour = document.querySelector("#one-hour");
let result = document.querySelector("#result");
let current = document.querySelector("#current");
let form = document.querySelector("form");
let counter;
let interval;

init(0)

function init(pMinutes) {
   counter = Math.floor(pMinutes * 60);
   printCurrent(pMinutes);

   interval = setInterval(() => {
      createResult(counter);
      counter--;
      console.log(counter);
      if (counter < 0) {
         clearInterval(interval);
         result.innerHTML += "<p>Time's up!</p>";
      }
   }, 1000);
}

function createResult(pSeconds) {
   let minutes = 0;
   if (pSeconds >= 60) {
      minutes = Math.floor(pSeconds / 60);
      pSeconds = pSeconds % 60;
      if (pSeconds === -1) {
         minutes--;
         pSeconds = 59;
         if (minutes === 0 && pSeconds === -1) {
            pSeconds = 0;
         }
      }
   }

   return (result.innerHTML = `${minutes} : ${pSeconds}`);
}

function printCurrent(pMinutes) {
   let currentHour = new Date().getHours();
   let currentMinute = new Date().getMinutes();
   currentMinute += Math.floor(pMinutes);
   if (currentMinute >= 60) {
      currentHour += Math.floor(currentMinute / 60);
      currentMinute = currentMinute % 60;
   }
   return (current.innerHTML = `Be Back At ${currentHour} : ${currentMinute}`);
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   clearInterval(interval);
   init(userInput.value);
   userInput.value = "";
});

sec.addEventListener("click", () => {
   clearInterval(interval);
   init(0.34);
});

fiveMin.addEventListener("click", () => {
   clearInterval(interval);
   init(5);
});

fifteenMin.addEventListener("click", () => {
   clearInterval(interval);
   init(15);
});

twentyMin.addEventListener("click", () => {
   clearInterval(interval);
   init(20);
});

oneHour.addEventListener("click", () => {
   clearInterval(interval);
   init(60);
});
