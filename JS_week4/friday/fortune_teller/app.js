function tellFortune(pNumberOfChildren, pPartnerName, pLocation, pJob) {
   this.numberOfChildren = pNumberOfChildren;
   this.partnerName = pPartnerName;
   this.geographicLocation = pLocation;
   this.job = pJob;

   return console.log(`You will be a ${this.job} in ${this.geographicLocation}, and married to ${this.partnerName} with ${this.numberOfChildren} kids.`)
}

tellFortune(1, "Lisa", "Zurich", "Teacher");
tellFortune(4, "John", "London", "CEO");
tellFortune(3, "Bella", "New York", "Politician");