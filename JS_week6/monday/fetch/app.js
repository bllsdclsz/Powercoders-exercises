let image = document.querySelector("img");

let imageUrl;
image.classList.add("transition-fade");
// const previousButton = document.querySelector("#previous");
const newImageButton = document.querySelector("#new-image");

let getNewImage = () => {
   let random = Math.floor(Math.random() * 5000);
   fetch(`https://jsonplaceholder.typicode.com/photos/${random}`)
      .then((response) => {
         console.log(response);
         return response.json();
      })
      .then((data) => {
         console.log(data);
         image.classList.toggle("transition-fade");
         image.classList.toggle("transition-fade2");
         return (image.src = data.url);
      })
      .catch((error) => {
         console.log(error);
      });
};
image.src = getNewImage();

newImageButton.addEventListener("click", () => {
   getNewImage();
});
