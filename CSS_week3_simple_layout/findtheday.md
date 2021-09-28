# Find the day of the year for the given date. 
# For example, January 1st would be 1, and December 31st is 365.

FindDay
    INITIALIZE monthArray with number of days per month [31,28,31,30,31,30,31,31,30,31,30,31]
    INITIALIZE inputDay as number
    INITIALIZE inputMonth as number
    INITIALIZE output as number = 0
    INITIALIZE month as number = 0

    PROMPT "Please insert a date of this year, day only" as inputDay
    PROMPT "Please insert a date of this year, month only" as inputMonth

    #VALIDATE YOUR INPUT
    # is it a number, 
    # is it a valid day for the given month (includes valid day in general)
    FUNCTION AreInputsValid
        IF inputMonth is number and is greater than 0 and less than 13
            IF inputDay is number and is greater than 0 and less than monthArray at index inputMonth-1 
                return true
            ELSE
                PROMPT "Try again. Please insert a valid day, 1 to monthArray[inputMonth-1]"
        ELSE
            PROMPT "Try again. Please insert a valid month, 1 to 12"
    END Function

    IF AreInputsValid
        WHILE month < inputMonth-1
            output = output + arrayMonth[month]
            month = month + 1
        END WHILE

        output = output + inputDay        

        PRINT "The given date " + inputDay +"."+ inputMonth+". is day "+output+" of the year 2021".
    END IF

END FindDay

# Example from another person