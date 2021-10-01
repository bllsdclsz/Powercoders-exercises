let numberOfChildren = 2;
let partnerName = "John";
let geographicLocation = "Zurich";
let titleOfJob = "Web Developer";
let personelInfo = {
   children: 2,
   partner: "Alice",
   location: "Bern",
   job: "Teacher",
};

let objectOutput = `You will be a ${personelInfo.job} in ${personelInfo.location}, and married to ${personelInfo.partner} with ${personelInfo.children} kids.`;

let output =
   "You will be a " +
   titleOfJob +
   " in " +
   geographicLocation +
   ", and married to " +
   partnerName +
   " with " +
   numberOfChildren +
   " kids.";

let output2 = `You will be a ${titleOfJob} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

console.log(output);
document.write(output + "<br/>");

console.log(output2);
document.write(output2 + "<br/>");

console.log(objectOutput);
document.write(objectOutput + "<br/>");
