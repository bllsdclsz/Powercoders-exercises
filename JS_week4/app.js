for (let index = 2; index < 1000; index++) {
   for (var number = 2; number < index; number++) {
      if (index % number === 0) break;
   }
   if (index === number) {
      console.log(index);
   }
}

let array = [2, 9, 6, 66, 78, 7, 23, 45];

let done = false;

while (!done) {
   done = true;
   for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
         done = false;
         let tmp = array[i - 1];
         array[i - 1] = array[i];
         array[i] = tmp;
      }
   }
}

console.log(array);

var temp = prompt("type somthing");
var count = temp.match(/[a-z+A-Z]/g).length;

console.log(count);
console.log(temp.match(/[a-z+A-Z]/g));


