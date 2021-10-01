# Counting Characters

CountChars
   INITIALIZE userInput as string = ""
   INITIALIZE isValid as false

   PROMPT "Please type something"

   FUNCTION countChars()
      IF userInput != null or userInput != ""
         lengthInput = userInput.length
         alert(`There are ${lengthInput} characters in ${UserInput}`)
      Else alert("try again")
   END FUNCTION

   CALL countChars

END CountChars


# Printing Quotes

PrintQuote
   INITIALIZE authorInput as string = ""
   INITIALIZE quoteInput as string = ""

   PROMPT "Please type quote" and ASSIGN to quoteInput
   PROMPT "Please type author of quote" and ASSIGN to authorInput

   FUNCTION printQuote()
      IF quoteInput != null or quoteInput != ""
         IF authorInput != null or authorInput != "" 
            alert(`${authorInput} says, "${quoteInput}"`)
         ELSE alert("Type author")
      ELSE alert ("Type quote")
   END FUNCTION

   CALL printQuote

END PrintQuote

# Mad Lib

MadLib
   INITIALIZE nounInput as string = ""
   INITIALIZE verbInput as string = ""
   INITIALIZE adverbInput as string = ""
   INITIALIZE adjectiveInput as string = ""
   INITIALIZE nounValid as false
   INITIALIZE verbValid as false
   INITIALIZE adverbValid as false
   INITIALIZE adjectiveValid as false

   PROMPT "Please type a noun" and ASSIGN to nounInput
   PROMPT "Please type a verb" and ASSIGN to verbInput
   PROMPT "Please type a adverb" and ASSIGN to adverbInput
   PROMPT "Please type a adjective" and ASSIGN to adjectiveInput

   FUNCTION validInput(pInput, pValid)
      IF pInput != null or pInput != ""
         return pValid = true
      ELSE return false
   END FUNCTION

   FUNCTION printSentence()
      IF validInput(nounInput, nounValid) and validInput(verbInput, verbValid) and validInput(adverbInput, adverbValid) and validInput(adjeciveInput, adjectiveValid)
         alert(`The police ${verbInput} the ${nounInput} taking the ${adjectiveInput} carpet ${adverbInput} home.`)
      ELSE alert("Something wrong! Please type inputs again!")
   END FUNCTION

   CALL printSentence

END MadLib









