import { renderWeatherC, 
         renderWeatherF, 
         renderLoader,
         renderErrorMsg } from './domRender'


// Gets users location using ipapi
(async function () {
  try {
    const response = await fetch('https://ipapi.co/json/'); 
    
    const userLocation = await response.json();

    localStorage.setItem("currentLocation", JSON.stringify(userLocation.city));
    
  } catch (error) {
    renderErrorMsg();
  };
})();

async function getCurrentWeather() {

    const unit = document.getElementById('toggle').value;

    const currentLocation = JSON.parse(localStorage.getItem("currentLocation") || "[]");

    let loading = true;

    renderLoader(loading);

    try {
      const response = await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&&units=${unit}&appid=5454474df3091f5395326c81f939b17b`, 
          {mode: 'cors'});

      const currentWeather = await response.json();

      loading = false;

      renderLoader(loading);

      if (unit === 'imperial') {
        renderWeatherF(currentWeather);

      } else {
          renderWeatherC(currentWeather);
      };
      
    } catch (error) {
      renderErrorMsg(error);
    };
};

getCurrentWeather();

const findBtn = document.querySelector('.search-ctn')
.addEventListener('submit', e => {
    e.preventDefault();

    const locationInput = document.getElementById('location-input').value;

    localStorage.removeItem('currentLocation');

    localStorage.setItem("currentLocation", JSON.stringify(locationInput));

    getCurrentWeather();
});

const unitsToggleBtn = document.getElementById('toggle')
.addEventListener('click', e => {
    if (e.target.value === 'metric') {
        e.target.value = 'imperial';
        getCurrentWeather();
    } else {
        e.target.value = 'metric';
        getCurrentWeather();
    };
});