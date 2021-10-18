const animals = [
   {
      name: "dog",
      age: 4
   },
   {
      name:"cat",
      age: 3
   }
]

let cats = animals.filter(animal => animal.name === "cat")

console.log(cats)