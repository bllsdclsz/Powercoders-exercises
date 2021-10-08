let topChoices = ["Zurich", "London", "Paris", "Berlin", "Toronto"];

for(let element of topChoices) {
   console.log(`My ${topChoices.indexOf(element)+1} choice is ${element}.`);
}

let choices = [];

choices.push({nameOfCity:"Zurich",cityOfCountry:"Switzerland",population:"1.1m"});
choices.push({nameOfCity:"London",cityOfCountry:"England",population:"5m"});
choices.push({nameOfCity:"Paris",cityOfCountry:"France",population:"4.5m"});
choices.push({nameOfCity:"Berlin",cityOfCountry:"Germany",population:"5.2m"});
choices.push({nameOfCity:"Toronto",cityOfCountry:"Canada",population:"2.3m"});

for(let element of choices) {
   console.log(`My ${choices.indexOf(element)+1} choice is ${element.nameOfCity}. It is a city of ${element.cityOfCountry}. Almost ${element.population} people live in there.`)
}