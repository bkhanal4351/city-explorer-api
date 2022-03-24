'use strict';
const axios = require('axios');


async function getMovies(request, response) {
  let city = request.query.city_name;

  let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}&total_results=7`;
  let movieResult = await axios.get(url);
  console.log(url);
  let movieData = new Movie(movieResult.data);

  console.log(movieData.data);


  response.send(movieData);


}




class Movie {
  constructor(movieValue) {
    this.moviesParsed = [];
    movieValue.results.forEach(movie => {
      this.moviesParsed.push({
        title: movie.original_title,
        overview: movie.overview,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        img: movie.poster_path,
        popularity: movie.popularity,
        release_date: movie.release_date
      });
    });

  }
}


module.exports = getMovies;
