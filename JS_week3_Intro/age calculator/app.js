let birthYear = 1980;
let futureYear = 2029;

let result = futureYear - birthYear;

let output = `I will be either ${result} or ${result + 1} in ${futureYear}`;

console.log(output);
document.write(output);

function calculateAge(pBirthYear, pFutureYear) {
   if (pBirthYear < pFutureYear) {
      let result = pFutureYear - pBirthYear;
      return console.log(`I will be either ${result} or ${result + 1} in ${pFutureYear}`);
   } else {
      console.log(`Birth year cannot be greater than future year!`);
   }
}

calculateAge(1999, 2010);
