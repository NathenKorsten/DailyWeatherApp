
const spinner = document.getElementById("loading")
const weatherIcon = document.getElementById("weather-icon")
const weatherResult = document.getElementById("result")
const weatherDescription = document.getElementById("weather-description")
const btnRefresh = document.getElementById("btnRefresh")
const weatherCity = document.getElementById("city")
const searchButton = document.getElementById("btnSearch")
const btnHumidity = document.getElementById("humidity")
const btnPressure = document.getElementById("pressure")
const btnSeaLevel = document.getElementById("sea-level")
const searchBox = document.getElementById("tbCity")


const getWeather = async (city = "Johannesburg") =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0e8f182f41d778272798e89879c4a78&units=metric`
    const weather = await fetch(url);
    const description = await weather.json();
    if(description)
        spinner.style.display="none"
    console.log(description.weather[0]);
    weatherResult.innerText = `${description.main.temp} °C`;
    weatherDescription.innerText = description.weather[0].description;
    weatherIcon.src= `http://openweathermap.org/img/wn/${description.weather[0].icon}@2x.png`;
    weatherCity.innerText = city;

    btnPressure.addEventListener("click", ()=>{
        weatherResult.innerText = `${description.main.pressure} Pa`
    })

    btnHumidity.addEventListener("click", ()=>{
        weatherResult.innerText = `${description.main.humidity} g`
    })

    btnSeaLevel.addEventListener("click", ()=>{
        weatherResult.innerText = `${description.s}`
    })
    
}

getWeather();

searchButton.addEventListener("click", ()=>{
    const city = searchBox.value
    if(city=="")
        alert("Please enter a city")
    getWeather(city)
})

btnRefresh.addEventListener("click", ()=>{
    window.location.reload();
})




