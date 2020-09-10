//Select all Elements
const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locElement = document.querySelector(".location p");
//
//Creating Object Property
const weather = {};
weather.temperature = {
   unit: "celsius",
}
//
//Api Response temp Value is in Kelvin
//then convert kelvin into Celsius
const kelvin = 273;
const apiKey = "82005d27a116c2880c8f0fcb866998a0";

//
//Check if browser support geolocation
if ('geolocation' in navigator) {
   navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
   notificationElement.style.display = "block";
   notificationElement.innerHTML = `<p>Your Browser doesn't support Geolocation</p>`;
}

function setPosition(position) {
   let latitude = position.coords.latitude;
   let longitude = position.coords.longitude;
   getWeather(latitude, longitude);
}

function showError(error) {
   notificationElement.style.display = "block";
   notificationElement.innerHTML = `<p>${error.message}</p>`;
}

function getWeather(latitude, longitude) {

}