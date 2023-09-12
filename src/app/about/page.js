import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p>
        Welcome to our movie database website! We are a team of passionate movie
        enthusiasts who have come together to create a one-stop destination for
        all of your movie-related needs. This product uses the TMDB API but is
        not endorsed or certified by TMDB.
      </p>
      <p>
        Our website is designed to provide you with a comprehensive database of
        movies from all around the world, along with the latest news, reviews,
        and trailers. Our movie database uses the API provided by The Movie
        Database (TMDB) ensuring that you have access to the latest and greatest
        in the world of cinema. You can search for movies by title, director,
        actor, genre, or release date, making it easy to find the perfect movie
        for any occasion!
      </p>
      <p>
        Thank you for visiting our website and we hope you enjoy your time
        browsing through our movie database provided by The Movie Database
        (TMDB) API. If you have any feedback or suggestions, please feel free to
        contact us. We are always looking for ways to improve and enhance the
        use experience on our website. Happy browsing!
      </p>
      <div>
        <img src="blue_square_2-tmdb.svg" alt="TMDB logo"/>
      </div>
    </div>
  );
};

export default About;
