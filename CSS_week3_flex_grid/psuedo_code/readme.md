# Psuedo Code

## Greetings

SayHello
   INITIALIZE name as string = ""
   INITIALIZE greetings "Hello"

   PROMPT "What is your name?"
   name = PROMPT.value

   FUNCTION sayHello()
      alert(`${greetings} ${name}`)
   END FUNCTION

   CALL sayHello

END SayHello

## Counting Characters

CountChars
   INITIALIZE string as string = ""

   PROMPT "Please type something"
   string = PROMPt.value

   FUNCTION countChars()
      lengthString = string.length
      alert(`There are ${lengthString} characters in ${string}`)
   END FUNCTION

   CALL countChars

END CountChars
