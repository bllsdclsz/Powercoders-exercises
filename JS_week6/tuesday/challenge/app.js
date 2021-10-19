const images = [
   "https://upload.wikimedia.org/wikipedia/commons/1/19/%C3%81guila_calva.jpg",
   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
   "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-1200-80.jpg",
   "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
];

let counter = 0;

let imageElement = document.createElement("img");
let imageSection = document.querySelector("section:nth-child(1)");
imageElement.alt = "alternative text";
imageElement.id = "slider";
imageElement.src = images[counter];
imageElement.classList.add("transition-fade")
imageSection.appendChild(imageElement);

const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", getPreviousImage);
nextButton.addEventListener("click", getNextImage);

function getNextImage() {
   counter++;

   if (counter === images.length) {
      counter = 0;
   }

   if (counter < images.length) {
      imageElement.src = images[counter];
   }
   addTransition()
}

function getPreviousImage() {
   counter--;

   if (counter < 0) {
      counter = images.length - 1;
   }

   imageElement.src = images[counter];
   addTransition()
}

function addTransition() {
    imageElement.classList.toggle("transition-fade")
    imageElement.classList.toggle("transition-fade2")
}
