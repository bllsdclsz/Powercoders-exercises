let firstNumber, secondNumber, greatestCommonDivisor, remainder;
let step = 0;

function isValid(pNumber) {
   if (pNumber < 0 || pNumber == null) {
      return false;
   } else {
      return true;
   }
}

function assignNumber() {
   if (isValid(firstNumber) || isValid(secondNumber)) {
      return true;
   }
   firstNumber = prompt("Please put in your first positive integer!");
   secondNumber = prompt("Please put in your second positive integer!");
   return assignNumber();
}

function calculateGCD() {
   assignNumber();
   if (remainder == 0) {
      return true;
   }
   remainder = firstNumber % secondNumber;
   greatestCommonDivisor = secondNumber;
   firstNumber = secondNumber;
   secondNumber = remainder;
   step++;
   return calculateGCD();
}

calculateGCD();
console.log(`Our GCD is ${greatestCommonDivisor} in step ${step}`);

/**
 * first Step
 * remainder = 20%30
 * GCD = 30
 * 20 = 30 / firstnnumber = 30
 * 30 = 20 / secondenumber = 20
 *
 * second step
 * remainder = 30%20
 * GCD = 20
 * 30 = 20 / firstnumber = 20
 * 20 = 10 / secondnumber = 10
 *
 * third step
 * remainder = 20%10
 * GCD = 10
 * 20 = 10 / firstnumber = 10
 * 10 = 0 / secondenumber = 0
 */
