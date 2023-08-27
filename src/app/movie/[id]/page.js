import React from "react";

const getMovie = async (movieId) => {

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  return await res.json();

};

const MoviePage = async ({ params }) => {

  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MoviePage;
