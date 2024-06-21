const apiKey = "9a297b8f43e1402752c7a392d927f976";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".searchBox input");
const searchBoxBtn = document.querySelector(".searchBox button");
const imgIcon = document.querySelector(".card .weather img");
const MainSection = document.querySelector(".card .weather");
const errItem = document.querySelector(".card .err"); 
async function checkWeather(city) {
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    const data = await response.json();
    if(data.cod != 404){
        imgIcon.src = checkWeatherForIcon(data.weather[0].main);
        MainSection.style.display = "block";
        errItem.style.display = "none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humdity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
    }else{
        document.querySelector(".city").innerHTML = "enter valid city name";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".humdity").innerHTML = "";
        document.querySelector(".wind").innerHTML = "";
        MainSection.style.display = "none";
        errItem.style.display = "block";
    }
}
function checkWeatherForIcon(weather){
    switch(weather){
        case "Clouds":
            return "weather-app-img/images/clouds.png";
            break;
        case "Clear":
            return "weather-app-img/images/clear.png";
            break;
        case "Rain":
            return "weather-app-img/images/rain.png";
            break;
        case "Drizzle":
            return "weather-app-img/images/drizzle.png";
            break;
        case "Mist":
            return "weather-app-img/images/mist.png";
            break;
        case "Clear":
            return "weather-app-img/images/clear.png";
            break;
        case "Clear":
            return "weather-app-img/images/clear.png";
            break;
    }
}
if(screen.availWidth > 600){
    searchBoxBtn.addEventListener("click",()=>{
        if(searchBox.value.length == 0){
            searchBox.style.border = "1px solid red";
        }else{
            checkWeather(searchBox.value);
            searchBox.style.border = "none";
        }
    });
}else{
    searchBox.addEventListener("input",()=>{
        if(searchBox.value.length > 0){
            checkWeather(searchBox.value);
        }else{
            errItem.style.display = "none";
        }
    })
}