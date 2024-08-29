const apiKey = "f97bcefbd2cf227f7d65e10dc3c64f40";  // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{let data = await response.json();  // Await the JSON parsing
    


        document.querySelector(".city").innerHTML = data.name;
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
        document.querySelector(".wind").innerHTML = data.wind.speed+ " Km/h";
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src ="images/clouds.png";
           
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src ="clear.png";
            background.src
        }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src ="rain.png";}
                else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src ="drizzle.png";}
                    else if (data.weather[0].main == "Mist") {
                        weatherIcon.src ="mist.png";}
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display= "none";
    }}
    
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

    })



