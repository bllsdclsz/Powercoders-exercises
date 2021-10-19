# What is the DOM, how to access elements, add, manipulate and remove them?

## What is the DOM?

The DOM stands for Document Object Model and it is Application Programming Interface of web.
By using DOM, we can access, add, manipulate and remove the elements and contents of HTML.
The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## How to access elements?

<input type="text" id="firstname" name="input-name" class="text-input">
<input type="text" id="lastname" name="input-name" class="text-input">
<script>
   let firstNameInput = document.getElementById("firstname");
</script>

Selecting Elements by ID                           getElementById("firstname")
Selecting Elements by Class Name                   getElementsByClassName("text-input")
Selecting Elements by Tag Name                     getElementsByTagName("input")
Selecting Elements by Name                         getElementsByName("input-name")
Selecting Elements by CSS Selector                 querySelector("#firstname" or ".text-input" or "input" or "input[type="text"]")
Selecting Elements as an Array by CSS Selector     querySelectorAll(".text-input" or "input[type="text"]") =>     Array[]

## How to add, manipulate and remove elements?

<main>

</main>
<script>
   let main = document.querySelector("main");
   let section = document.createElement("section")
   main.appendChild(section)
   section.innerHTML = "This is a section"
   section.style.backgroundColor = 'blue'
   section.parentNode
   main.removeChild(section)
</script>

Creating an element                                document.createElement()
Adding an element                                  main.appendChild()
Removing an element                                main.removeChild()
Accessing class of element                         section.className
Adding class to an element                         section.classList.add()
Removing class from element                        section.classList.remove()
Changing the style element                         section.style.*cssProperty =*cssValue
