'use strict';


console.log('My first server');


const express = require('express');
require('dotenv').config();
// let weatherData = require('./data/weather.json');

const cors = require('cors');
const getForecast = require('./weather.js');





const app = express();
app.use(cors());
const axios = require('axios');
const getMovies = require('./movie.js');


const PORT = process.env.PORT || 3002;


app.get('/', (request, response) => {
  response.send('Hello');
});

app.get('/weather', getForecast);
// let city = request.query.city_name;
// let url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.WEATHER_API}`;
// let weatherResult = await axios.get(url);
// console.log(url);
// let forecastData = new Forecast(weatherResult.data);




// response.send(forecastData);



app.get('/movies', getMovies);








// class Forecast {
//   constructor(cityData) {
//     this.date = cityData.data[0].ob_time;
//     this.description = cityData.data[0].weather.description;
//   }
// }



// LISTEN
// start the server

app.listen(PORT, () => console.log(`listening on port ${PORT}`));