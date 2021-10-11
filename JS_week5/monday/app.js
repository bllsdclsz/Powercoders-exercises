const PASSWORD = "password";

let body = document.body;
let list = document.querySelector("ul");
let input = document.querySelector("input[type='text']");
let form = document.querySelector("form");
let idCounter = 3;

isPasswordCorrect()

function isPasswordCorrect() {
   let userPassword = prompt("Please enter your password!")
   console.log(userPassword)
   if(PASSWORD==userPassword) {
      return true;
   } else {
      alert("Your password is incorrect")
      isPasswordCorrect()
   }
}

function todoItem(pId, pTodo, pIsDone = false) {
   this.id = pId;
   this.todo = pTodo;
   this.isDone = pIsDone;
}

let todoArray = [new todoItem(1, "go shopping"), new todoItem(2, "do your homeworks"), new todoItem(3, "clean the room")];

function sortArray() {
   return todoArray.sort((a, b) => {
      return a.todo < b.todo ? -1 : a.todo > b.todo ? 1 : 0;
   });
}

function addTodo(pTodo, pIsChecked) {
   idCounter++;
   return todoArray.push(new todoItem(idCounter, pTodo, pIsChecked));
}

function printArray() {
   for (let index = 0; index < todoArray.length; index++) {
      let todoItem = todoArray[index];
      let todoItemElement = document.createElement('li')
      todoItemElement.id = todoItem.id
      todoItemElement.innerText = `${todoItem.todo} --> ${todoItem.isDone}`
      list.appendChild(todoItemElement)
      addColorToDoneTodos(todoArray[index]);
   }
   let listItems = document.querySelectorAll("li");
   for (let i = 0; i < listItems.length; i++) {
      listItems[i].addEventListener("click", (event) => {
         event.preventDefault();
         let elementId = event.target.id;
         console.log(event.target)
         searchAndChangeStatus(elementId);
      });
   }
}

function searchAndChangeStatus(pElementId) {
   for (let index = 0; index < todoArray.length; index++) {
      if (pElementId == todoArray[index].id) {
         changeIsDoneStatus(todoArray[index]);
         refreshInnerHtml(list);
         printArray();
      }
   }
}

function changeIsDoneStatus(pTodo) {
   return pTodo.isDone ? (pTodo.isDone = false) : (pTodo.isDone = true);
}

function takeUserInputValue() {
   if (input.value == "" || input.value == null || input.value == undefined) {
      alert("Your todo is invalid. Please try again");
      console.log("input.value not valid");
      return false;
   } else {
      console.log(input.value);
      return input.value;
   }
}

function refreshInnerHtml(pInnerHtml) {
   return (pInnerHtml.innerHTML = "");
}

form.addEventListener("submit", (event) => {
   event.preventDefault();
   refreshInnerHtml(list);
   let value = takeUserInputValue();
   if (value) {
      addTodo(value);
      sortArray();
      printArray();
   }
});

function addColorToDoneTodos(pTodo) {
   return pTodo.isDone ? (document.getElementById(`${pTodo.id}`).classList.add("done")) : (document.getElementById(`${pTodo.id}`).classList.remove("done"));
}
