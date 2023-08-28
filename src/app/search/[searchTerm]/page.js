import React from "react";

const SearchPage = async (params) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  return <div>SearchPage</div>;
};

export default SearchPage;
