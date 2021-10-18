const images = [
   "https://upload.wikimedia.org/wikipedia/commons/1/19/%C3%81guila_calva.jpg",
   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
   "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-1200-80.jpg",
   "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
];

const image = document.querySelector("#slider");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
let counter = 0;

image.src = images[counter];
image.classList.add("transition-fade");

nextButton.addEventListener("click", getNextImage);
previousButton.addEventListener("click", getPreviousImage);

function getNextImage() {
   counter++;

   if (counter === images.length) {
      counter = 0;
   }

   if (counter < images.length) {
      image.src = images[counter];
   }
   addTransition();
}

function getPreviousImage() {
   counter--;
   console.log(counter);
   if (counter < 0) {
      counter = images.length - 1;
   }
   image.src = images[counter];
   addTransition();
}

function addTransition() {
   image.classList.toggle("transition-fade");
   image.classList.toggle("transition-fade2");
}