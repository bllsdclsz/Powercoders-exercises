const input = document.querySelector("input[type='file']")
const galeri = document.querySelector(".galeri")

input.addEventListener("change", getDimensions)

function getDimensions() {
   const files = this.files
   for(let file of files) {
      let objectURL = URL.createObjectURL(file);
      let image = new Image(230, 200)
      image.src = objectURL;
      galeri.appendChild(image)
      console.log(objectURL)
      image.onload = () => {
         console.log(`Image ${file.name.substring(0, file.name.indexOf('.'))}'s'resolution is ${image.naturalWidth}x${image.naturalHeight}`)
      }
   }
}

