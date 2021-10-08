class MadLibrary{
   constructor(pNoun, pVerb, pAdverb, pAdjective){
      this.noun = pNoun;
      this.verb = pVerb;
      this.adverb = pAdverb;
      this.adjective = pAdjective;
   }

   createTemplate(pNoun, pVerb, pAdverb, pAdjective){
      let template = `I ${pVerb} ${pNoun} ${pAdverb}, my favorite color is ${pAdjective}.`
      return template;
   } 

   printOutput(){
      return console.log(this.createTemplate(this.noun, this.verb, this.adverb, this.adjective))
   }

   init(){
      this.printOutput();
   }
}

let madLibArray = []

madLibArray.push(new MadLibrary("garden", "work", "regularly", "red"));
madLibArray.push(new MadLibrary("house", "live", "entirely", "black"));

for(let element of madLibArray) {
   element.init();
}


