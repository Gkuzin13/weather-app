export function renderLoader(loading) {
    const mainCtn = document.querySelector('.main-ctn');
    
    mainCtn.children[1].style.display = 'none';

    const loader = document.querySelector('.loader');

    if (loading) {
        mainCtn.children[2].style.display = 'none';
        mainCtn.children[3].style.display = 'none';

        loader.style.display = 'block';
    } else {
        
        mainCtn.children[2].style.display = 'block';
        mainCtn.children[3].style.display = 'grid';

        loader.style.display = 'none';
    };
};

export function renderErrorMsg(error) {
    const mainCtn = document.querySelector('.main-ctn');

    mainCtn.children[2].style.display = 'none';
    mainCtn.children[3].style.display = 'none';
    
    const errorCtn = document.querySelector('.error-ctn');
    errorCtn.style.display = 'block';

};

export function renderWeatherC(data) {

    const cityName = document.querySelector('.city-info');
    cityName.textContent = `${data.name}, ${data.sys.country}`;

    const skyCondition = document.querySelector('.sky-cond');
    const skyCondData = data.weather[0].description;
    const capitalizdSkyCond = skyCondData[0].toUpperCase() + skyCondData.substring(1);
    skyCondition.textContent = capitalizdSkyCond;

    const temperature = document.querySelector('.temp-info');
    temperature.textContent = `${Math.round(data.main.temp)}°C`;

    const minTemp = document.querySelector('.min-temp');
    minTemp.textContent = `L:${Math.round(data.main.temp_min)}°`;

    const maxTemp = document.querySelector('.max-temp');
    maxTemp.textContent = `H:${Math.round(data.main.temp_max)}°`;

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°`;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `${data.main.humidity}%`;

    const visibility = document.querySelector('.visibility');
    visibility.textContent = `${parseInt(data.visibility / 1000)} km`;

    const cloudiness = document.querySelector('.clouds');
    cloudiness.textContent = `${data.clouds.all}%`;

    const wind = document.querySelector('.wind');
    wind.textContent = `${parseInt(data.wind.speed * 3.6)} km/hr`;

    const pressure = document.querySelector('.pressure');
    pressure.textContent = `${data.main.pressure} hPa`;

    console.log(data)
};

export function renderWeatherF(data) {

    const cityName = document.querySelector('.city-info');
    cityName.textContent = `${data.name}, ${data.sys.country}`;

    const skyCondition = document.querySelector('.sky-cond');
    const skyCondData = data.weather[0].description;
    const capitalizdSkyCond = skyCondData[0].toUpperCase() + skyCondData.substring(1);
    skyCondition.textContent = capitalizdSkyCond;

    const temperature = document.querySelector('.temp-info');
    temperature.textContent = `${Math.round(data.main.temp)}°F`;

    const minTemp = document.querySelector('.min-temp');
    minTemp.textContent = `L:${Math.round(data.main.temp_min)}°`;

    const maxTemp = document.querySelector('.max-temp');
    maxTemp.textContent = `H:${Math.round(data.main.temp_max)}°`;

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°`;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `${data.main.humidity}%`;

    const visibility = document.querySelector('.visibility');
    visibility.textContent = `${parseInt(data.visibility / 1000)} km`;
    
    const cloudiness = document.querySelector('.clouds');
    cloudiness.textContent = `${data.clouds.all}%`;

    const wind = document.querySelector('.wind');
    wind.textContent = `${data.wind.speed} m/hr`;

    const pressure = document.querySelector('.pressure');
    pressure.textContent = `${data.main.pressure} hPa`;

    console.log(data)
};


