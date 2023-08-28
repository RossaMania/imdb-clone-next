export const dynamic = "force-dynamic";

import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `
https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10800 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); //this will be caught by the error page and passed to the error page as props.
  }

  const data = await res.json();

  const results = data.results;

  return (
    <h1>
      <Results results={results} />
    </h1>
  );
}
