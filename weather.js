'use strict';
const axios = require('axios');

async function getForecast(request, response){
  let city = request.query.city_name;
  let url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.WEATHER_API}`;
  let weatherResult = await axios.get(url);
  console.log(url);
  let forecastData = new Forecast(weatherResult.data);




  response.send(forecastData);

}


class Forecast {
  constructor(cityData) {
    this.date = cityData.data[0].ob_time;
    this.description = cityData.data[0].weather.description;
  }
}





module.exports = getForecast;
