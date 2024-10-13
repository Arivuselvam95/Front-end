const weatherForm=document.querySelector(".weatherform");
const cityname=document.querySelector(".CityInput");
const WeatherData=document.querySelector(".WeatherData");
const apiKey="fecf3707cacbc3fc832705eb9607f64f";

weatherForm.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const city=cityname.value;
    if(city){
        try{
            const weather= await getWeatherData(city);
            DisplayWeatherData(weather);
        }
        catch(error){
            DisplayErrorMessage(error);
        }
    }else{
        DisplayErrorMessage("Enter a city to get Weather Data");
    }
});
async function getWeatherData(city){

    const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response= await fetch(apiURL);
    if(!response.ok){
        throw new Error("Could not fetch the weather data");

    }
    return await response.json();
} 
function DisplayWeatherData(data){
    const {name: city, main:{temp,humidity}, 
            weather:[{description,id}]}=data;
    
    WeatherData.textContent="";
    WeatherData.style.display="flex";

    const CityName=document.createElement("h1");
    const CityTemperature=document.createElement("p");
    const CityHumidity=document.createElement("p");
    const CityDescription=document.createElement("p");
    const CityWeatherEmoji=document.createElement("p");
    
    CityName.textContent=city;
    CityTemperature.textContent=`${(temp-273.15).toFixed(1)}°C`;
    CityHumidity.textContent=`Humidity: ${humidity}%`;
    CityDescription.textContent=description;
    CityWeatherEmoji.textContent=DisplayWeatherEmoji(id);

    CityName.classList.add("CityName");
    CityTemperature.classList.add("CityTemperature");
    CityHumidity.classList.add("CityHumidity");
    CityDescription.classList.add("CityDescription");
    CityWeatherEmoji.classList.add("CityWeatherEmoji");

    WeatherData.appendChild(CityName);
    WeatherData.appendChild(CityTemperature);
    WeatherData.appendChild(CityHumidity);
    WeatherData.appendChild(CityDescription);
    WeatherData.appendChild(CityWeatherEmoji);

}
function DisplayWeatherEmoji(id){
    switch(true){
        case (id>=200 && id<300):
            return "⛈️";
        case (id >=300 && id<400):
            return "🌧️";
        case (id >=500 && id<600):
            return "🌧️";
        case (id >=600 && id<700):
            return "❄️";
        case (id >=700 && id<800):
            return "🌥️";
        case (id===800):
            return "🌞";
        case (id >=801 && id<810):
            return "☁️";
        default:
            return "❔";
    }
}
function DisplayErrorMessage(message){
    const error=document.createElement("p");
    error.textContent=message;
    error.classList.add("ErrorMsg");
    WeatherData.textContent="";
    WeatherData.style.display="flex";
    WeatherData.appendChild(error);
}