# Create a random password generator.
# Length of the password should be at least 8 characters and should have at least 1 digit and 1 special char.

CreatePasswordGenerator
   INITIALIZE stringArray with alphabeth ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'y', 'x', 'z']
   INITIALIZE digitArray [0,1,2,3,4,5,6,7,8,9]
   INITIALIZE charArray ['+', '+', '!', '§', '$', '-', '_']
   INITIALIZE randomNumberForPasswordLength as number = 0
   INITIALIZE randomNumberForDigitLength as number = 0
   INITIALIZE randomNumberForCharLength as number = 0
   INITIALIZE password as string = ""
   INITIALIZE index as number = 0

   FUNCTION createPassword
      GENERATE randomNumberForPasswordLength in range between 8 and 32
      GENERATE randomNumberForDigitLength in range between 1 and randomNumberForPasswordLength.length - 1
      GENERATE randomNumberForCharLength in range between 1 and randomNumberForPasswordLength.length - randomNumberForDigitLength - 1

      FOR index < randomNumberForCharLength
         password += password
         FOR index < randomNumberForDigitLength
            password += password
            FOR index < randomNumberForPasswordLength
               password += password
            END FOR
         END FOR   
      END FOR

      PRINT `Random Password is ${password}`
   END FUNCTION
END CreatePasswordGenerator

# Example from me