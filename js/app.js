const btnGetWeather = document.getElementById('btnGetWeather');
const citySearch = document.getElementById('city');
let cityFound = {};

//Eventos 
btnGetWeather.addEventListener('click', () => {
    if(citySearch.value.trim().length > 0) {
        getWeather(citySearch.value);
    } else {
        alert('Ciudad vacía');
        citySearch.focus();
    }
})

const newData = () => {
    const city = document.getElementById('newCity');
    const last_update = document.getElementById('newHour');
    const temp = document.getElementById('newTemp');
    const wind = document.getElementById('viento');
    const humidity = document.getElementById('humedad');
    const aqi_remark = document.getElementById('estadoClima');
    const uv_index = document.getElementById('uv');
    const bg_image = document.getElementById('imgClima');


    city.textContent = cityFound.city;
    last_update.textContent = cityFound.last_update;
    temp.textContent = cityFound.temp + '°C ';
    wind.textContent = cityFound.wind;
    humidity.textContent = cityFound.humidity;
    aqi_remark.textContent = cityFound.aqi_remark;
    uv_index.textContent = cityFound.uv_index + ' UV';
    bg_image.style.backgroundImage(cityFound.bg_image)
   // bg_image.textContent = cityFound.bg_image;
}