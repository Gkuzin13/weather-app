/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domRender.js":
/*!**************************!*\
  !*** ./src/domRender.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderLoader\": () => /* binding */ renderLoader,\n/* harmony export */   \"renderErrorMsg\": () => /* binding */ renderErrorMsg,\n/* harmony export */   \"renderWeatherC\": () => /* binding */ renderWeatherC,\n/* harmony export */   \"renderWeatherF\": () => /* binding */ renderWeatherF\n/* harmony export */ });\nfunction renderLoader(loading) {\n    const mainCtn = document.querySelector('.main-ctn');\n    \n    mainCtn.children[1].style.display = 'none';\n\n    const loader = document.querySelector('.loader');\n\n    if (loading) {\n        mainCtn.children[2].style.display = 'none';\n        mainCtn.children[3].style.display = 'none';\n\n        loader.style.display = 'block';\n    } else {\n        \n        mainCtn.children[2].style.display = 'block';\n        mainCtn.children[3].style.display = 'grid';\n\n        loader.style.display = 'none';\n    };\n};\n\nfunction renderErrorMsg(error) {\n    const mainCtn = document.querySelector('.main-ctn');\n\n    mainCtn.children[2].style.display = 'none';\n    mainCtn.children[3].style.display = 'none';\n    \n    const errorCtn = document.querySelector('.error-ctn');\n    errorCtn.style.display = 'block';\n\n};\n\nfunction renderWeatherC(data) {\n\n    const cityName = document.querySelector('.city-info');\n    cityName.textContent = `${data.name}, ${data.sys.country}`;\n\n    const skyCondition = document.querySelector('.sky-cond');\n    const skyCondData = data.weather[0].description;\n    const capitalizdSkyCond = skyCondData[0].toUpperCase() + skyCondData.substring(1);\n    skyCondition.textContent = capitalizdSkyCond;\n\n    const temperature = document.querySelector('.temp-info');\n    temperature.textContent = `${Math.round(data.main.temp)}°C`;\n\n    const minTemp = document.querySelector('.min-temp');\n    minTemp.textContent = `L:${Math.round(data.main.temp_min)}°`;\n\n    const maxTemp = document.querySelector('.max-temp');\n    maxTemp.textContent = `H:${Math.round(data.main.temp_max)}°`;\n\n    const feelsLike = document.querySelector('.feels-like');\n    feelsLike.textContent = `${Math.round(data.main.feels_like)}°`;\n\n    const humidity = document.querySelector('.humidity');\n    humidity.textContent = `${data.main.humidity}%`;\n\n    const visibility = document.querySelector('.visibility');\n    visibility.textContent = `${parseInt(data.visibility / 1000)} km`;\n\n    const cloudiness = document.querySelector('.clouds');\n    cloudiness.textContent = `${data.clouds.all}%`;\n\n    const wind = document.querySelector('.wind');\n    wind.textContent = `${parseInt(data.wind.speed * 3.6)} km/hr`;\n\n    const pressure = document.querySelector('.pressure');\n    pressure.textContent = `${data.main.pressure} hPa`;\n\n    console.log(data)\n};\n\nfunction renderWeatherF(data) {\n\n    const cityName = document.querySelector('.city-info');\n    cityName.textContent = `${data.name}, ${data.sys.country}`;\n\n    const skyCondition = document.querySelector('.sky-cond');\n    const skyCondData = data.weather[0].description;\n    const capitalizdSkyCond = skyCondData[0].toUpperCase() + skyCondData.substring(1);\n    skyCondition.textContent = capitalizdSkyCond;\n\n    const temperature = document.querySelector('.temp-info');\n    temperature.textContent = `${Math.round(data.main.temp)}°F`;\n\n    const minTemp = document.querySelector('.min-temp');\n    minTemp.textContent = `L:${Math.round(data.main.temp_min)}°`;\n\n    const maxTemp = document.querySelector('.max-temp');\n    maxTemp.textContent = `H:${Math.round(data.main.temp_max)}°`;\n\n    const feelsLike = document.querySelector('.feels-like');\n    feelsLike.textContent = `${Math.round(data.main.feels_like)}°`;\n\n    const humidity = document.querySelector('.humidity');\n    humidity.textContent = `${data.main.humidity}%`;\n\n    const visibility = document.querySelector('.visibility');\n    visibility.textContent = `${parseInt(data.visibility / 1000)} km`;\n    \n    const cloudiness = document.querySelector('.clouds');\n    cloudiness.textContent = `${data.clouds.all}%`;\n\n    const wind = document.querySelector('.wind');\n    wind.textContent = `${data.wind.speed} m/hr`;\n\n    const pressure = document.querySelector('.pressure');\n    pressure.textContent = `${data.main.pressure} hPa`;\n\n    console.log(data)\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/domRender.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domRender */ \"./src/domRender.js\");\n\n\n\n// Gets users location using ipapi\n(async function () {\n  try {\n    const response = await fetch('https://ipapi.co/json/'); \n    \n    const userLocation = await response.json();\n\n    localStorage.setItem(\"currentLocation\", JSON.stringify(userLocation.city));\n    \n  } catch (error) {\n    (0,_domRender__WEBPACK_IMPORTED_MODULE_0__.renderErrorMsg)();\n  };\n})();\n\nasync function getCurrentWeather() {\n\n    const unit = document.getElementById('toggle').value;\n\n    const currentLocation = JSON.parse(localStorage.getItem(\"currentLocation\") || \"[]\");\n\n    let loading = true;\n\n    (0,_domRender__WEBPACK_IMPORTED_MODULE_0__.renderLoader)(loading);\n\n    try {\n      const response = await fetch\n        (`https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&&units=${unit}&appid=5454474df3091f5395326c81f939b17b`, \n          {mode: 'cors'});\n\n      const currentWeather = await response.json();\n\n      loading = false;\n\n      (0,_domRender__WEBPACK_IMPORTED_MODULE_0__.renderLoader)(loading);\n\n      if (unit === 'imperial') {\n        (0,_domRender__WEBPACK_IMPORTED_MODULE_0__.renderWeatherF)(currentWeather);\n\n      } else {\n          (0,_domRender__WEBPACK_IMPORTED_MODULE_0__.renderWeatherC)(currentWeather);\n      };\n      \n    } catch (error) {\n      (0,_domRender__WEBPACK_IMPORTED_MODULE_0__.renderErrorMsg)(error);\n    };\n};\n\ngetCurrentWeather();\n\nconst findBtn = document.querySelector('.search-ctn')\n.addEventListener('submit', e => {\n    e.preventDefault();\n\n    const locationInput = document.getElementById('location-input').value;\n\n    localStorage.removeItem('currentLocation');\n\n    localStorage.setItem(\"currentLocation\", JSON.stringify(locationInput));\n\n    getCurrentWeather();\n});\n\nconst unitsToggleBtn = document.getElementById('toggle')\n.addEventListener('click', e => {\n    if (e.target.value === 'metric') {\n        e.target.value = 'imperial';\n        getCurrentWeather();\n    } else {\n        e.target.value = 'metric';\n        getCurrentWeather();\n    };\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;