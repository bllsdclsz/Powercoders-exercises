let weather;
let searchedCity = document.querySelector("#city");
let form = document.querySelector("form");
let button = document.querySelector("button");
let main = document.querySelector("main");
let section = document.createElement("section");

const cityData = async (pSearchedCity) => {
   try {
      const response = await fetch(
         `http://api.openweathermap.org/data/2.5/weather?q=${pSearchedCity}&appid=93c8380c0459cb7a5f390f0652ae912f`
      );
      const data = await response.json();
      return (weather = data);
   } catch (error) {
      return console.log(error);
   }
};

form.addEventListener("submit", async (event) => {
   event.preventDefault();
   await cityData(searchedCity.value);
   console.log(searchedCity.value);
   console.log(weather);
   console.log(calculateTime(weather.sys.sunrise));
   section.innerHTML = "";
   printCityWeather(weather);
});

const changeIcon = (pWeather) => {
   switch (pWeather.weather[0].description) {
      case "clear sky":
         pWeather.weather[0].icon = "./animated/day.svg";
         break;
      case "few clouds":
         pWeather.weather[0].icon = "./animated/cloudy-day-1.svg";
         break;
      case "scattered clouds":
         pWeather.weather[0].icon = "./animated/cloudy-day-3.svg";
         break;
      case "broken clouds":
         pWeather.weather[0].icon = "./animated/cloudy.svg";
         break;
      case "shower rain":
         pWeather.weather[0].icon = "./animated/rainy-4.svg";
         break;
      case "rain":
         pWeather.weather[0].icon = "./animated/rainy-7.svg";
         break;
      case "thunderstorm":
         pWeather.weather[0].icon = "./animated/thunder.svg";
         break;
      case "snow":
         pWeather.weather[0].icon = "./animated/snowy-4.svg";
         break;
      case "mist":
         pWeather.weather[0].icon = "https://img.icons8.com/ios-glyphs/344/foggy-night-1.png";
         break;
      default:
         pWeather.weather[0].icon;
         break;
   }
};

const printCityWeather = (pWeather) => {
   changeIcon(pWeather);
   let temp = convertFahrToCel(pWeather);
   let timeSunrise = calculateTime(weather.sys.sunrise);
   let timeSunset = calculateTime(weather.sys.sunset);
   let nameOfCity = document.createElement("h2");
   let icon = document.createElement("img");
   let countrySpan = document.createElement("span");
   let sunriseSpan = document.createElement("span");
   let sunsetSpan = document.createElement("span");
   let tempSpan = document.createElement("span");
   let upperZero = document.createElement("sup");
   let zero = document.createElement("span");
   adjustBackground(pWeather, icon)
   upperZero.textContent = "o"
   zero.appendChild(upperZero)
   zero.append("C")
   icon.src = pWeather.weather[0].icon;
   icon.alt = `${pWeather.weather[0].description}`;
   nameOfCity.textContent = `${pWeather.name}`;
   nameOfCity.id = "city"
   countrySpan.textContent = pWeather.sys.country;
   sunriseSpan.textContent = "Sunrise " + timeSunrise;
   sunriseSpan.id = "sunrise";
   sunsetSpan.textContent = "Sunset " + timeSunset;
   sunsetSpan.id = "sunset";
   tempSpan.textContent = temp;
   tempSpan.id = "temp"
   countrySpan.id = "country";
   tempSpan.appendChild(zero);
   section.appendChild(icon);
   section.appendChild(nameOfCity);
   nameOfCity.appendChild(countrySpan);
   section.appendChild(sunriseSpan);
   section.appendChild(sunsetSpan);
   section.appendChild(tempSpan);
   main.appendChild(section);
};

const convertFahrToCel = (pWeather) => {
   let newTemp = pWeather.main.temp-273.15
   return (pWeather.main.temp = Math.floor(newTemp));
};

const calculateTime = (pMiliseconds) => {
   let minutes = Math.floor((pMiliseconds / (1000 * 60)) % 60),
      hours = Math.floor((pMiliseconds / (1000 * 60 * 60)) % 24);

   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;

   return hours + ":" + minutes;
};

const adjustBackground = (pWeather) => {
   if (pWeather.weather[0].description == "clear sky"){
      section.style.backgroundImage = "url(https://images.creativemarket.com/0.1.0/ps/3834326/1820/1214/m1/fpnw/wm1/olxpktcjymbhnfzclsep24aujhflcs64jvag0bc5tgnbyfnvlu4h1urzkhanp36z-.jpg?1515696676&s=a3fe6840eaa6183b18951d68eefa8783)"
      section.style.backgroundSize = "cover"
   } else if (pWeather.weather[0].description == "few clouds") {
      section.style.backgroundImage = "url(https://media.istockphoto.com/photos/beautiful-blue-sky-with-few-clouds-on-bright-sunny-day-picture-id1189961428?k=20&m=1189961428&s=170667a&w=0&h=gGR0INKsmTsVza7E4R2MZ_F_AbfMcDJXyrgbDUpRZTU=)"
      section.style.backgroundSize = "cover"
   } else if (pWeather.weather[0].description == "scattered clouds") {
      section.style.backgroundImage = "url(https://live.staticflickr.com/2106/1909487867_de140c7eb8_b.jpg)"
      section.style.backgroundSize = "cover"
   }
}
