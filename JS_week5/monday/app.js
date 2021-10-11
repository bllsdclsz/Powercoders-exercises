const PASSWORD = "password";
let userPassword = "passwor"
function isPasswordCorrect(pUserPassword) {
   if(PASSWORD==pUserPassword) {
      return true;
   } else {
      console.log("Your password is incorrect")
   }
}

function todoItem (pTodo, pIsChecked = false) {
   this.todo = pTodo;
   this.isChecked = pIsChecked;
};

let todoArray = [
   new todoItem("go shopping"),
   new todoItem("do your homeworks"),
   new todoItem("clean the room")
];

addTodo("drink a tea", true);
addTodo("adjust your schedule");
sortArray(todoArray);
if(isPasswordCorrect(userPassword)) {
   printArray(todoArray);
} else {
   return false;
}

function sortArray(pArray) {
   return pArray.sort((a, b) => {
      return a.todo < b.todo ? -1 : a.todo > b.todo ? 1 : 0;
   });
}

function addTodo(pTodo, pIsChecked) {
   return todoArray.push(new todoItem(pTodo, pIsChecked));
}

function printArray(pArray) {
   for (let index = 0; index < pArray.length; index++) {
      console.log(`${pArray[index].todo} --> ${pArray[index].isChecked}`);
   }
}

function controlCheck(pTodo) {
   return pTodo.isChecked ? pTodo.isChecked = false : pTodo.isChecked = true
}

