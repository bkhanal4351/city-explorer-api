'use strict';
const axios = require('axios');


async function getMovies(request, response) {
  let city = request.query.city_name;

  let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API}&query=${city}&total_results=4`;
  let movieResult = await axios.get(url);
  console.log(movieResult);
  // let movieData = new Movie(movieResult.data);
  let movieData = movieResult.data.results.map(movie => {
    return new Movie(movie);
  });

  console.log(movieData.data);


  response.send(movieData);


}



// this.moviesParsed = [];
// movieValue.results.forEach(movie => {
//   this.moviesParsed.push({
class Movie {
  constructor(movieValue) {


    this.title = movieValue.original_title;
    this.overview = movieValue.overview;
    this.vote_average = movieValue.vote_average;
    this.vote_count = movieValue.vote_count;
    // this.img= movieValue.poster_path;
    this.popularity = movieValue.popularity;
    this.release_date = movieValue.release_date;
  }


}



module.exports = getMovies;
