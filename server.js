'use strict';


console.log('My first server');


const express = require('express');
require('dotenv').config();
// let weatherData = require('./data/weather.json');

const cors = require('cors');





const app = express();
app.use(cors());
const axios = require('axios');


const PORT = process.env.PORT || 3002;


app.get('/', (request, response) => {
  response.send('Hello');
});

app.get('/weather', async (request, response) => {
  let city = request.query.city_name;
  let url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.WEATHER_API}`;
  let weatherResult = await axios.get(url);
  console.log(url);
  let forecastData = new Forecast(weatherResult.data);




  response.send(forecastData);

});

app.get('/movies', async (request, response) => {
  let city = request.query.city_name;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&city=${city}&total_results=3`;
  let movieResult = await axios.get(url);
  console.log(url);
  let movieData = new Movie(movieResult.data);




  response.send(movieData);

});


app.get('*', (request, response) => {
  response.send('Error received! Try again!');
});




class Forecast {
  constructor(cityData) {
    this.date = cityData.data[0].ob_time;
    this.description = cityData.data[0].weather.description;
  }
}

class Movie {
  constructor(value) {
    this.title= value.title;
    this.description = value.overview;
    this.language = value.original_language;
    this.tagline= value.tagline;
  }
}


// LISTEN
// start the server

app.listen(PORT, () => console.log(`listening on port ${PORT}`));