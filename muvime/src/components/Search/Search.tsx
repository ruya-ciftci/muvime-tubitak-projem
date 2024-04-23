import { useEffect, useRef, useState } from "react";
import "./Search.css";
import { Header } from "../Header/Header";
import { MovieCard } from "../Card/components/MovieCard/MovieCard";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import dayjs from "dayjs";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  vote_average: number;
  release_date: string;
  poster_path: string | null;
}

export const ACCCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTdjYzU4OTAzYzAyZWQ4Y2ZiYjQzZTE0NTE1NjY3NCIsInN1YiI6IjY0YmY3NzkwMDE3NTdmMDExY2E4ODcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwtqnzSkXwmE9NpmC_tOG9ZcO7imBaqvK4j843d8xUY";

const itemsPerPage: number = 20; // Adjust this value according to your API's pagination settings

export const Search = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const navigate = useNavigate();
  const [movieRuntimes, setMovieRuntimes] = useState<{ [key: number]: number }>(
    {}
  );
  const { searchTerms, page = "1" } = useParams<{
    searchTerms: string;
    page?: string;
  }>();
  const currentPage = page ? parseInt(page, 10) : 1;
  const totalPages: number = Math.ceil(searchResults.length / itemsPerPage);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const responseGenre: AxiosResponse<{ genres: Genre[] }> =
          await axios.get("https://api.themoviedb.org/3/genre/movie/list", {
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + ACCCESS_TOKEN,
            },
          });
        const genres = responseGenre.data.genres;
        setGenres(genres);
      } catch (errorGenre: any) {
        console.error(errorGenre);
      }
    };
    fetchGenres();
  }, []);

  const url = (posterPath: string | null) => {
    return posterPath
      ? "https://image.tmdb.org/t/p/original" + posterPath
      : "https://via.placeholder.com/200x300?text=No+Image";
  };

  const runtimeFinder = searchResults.map((movie: Movie) => {
    return movie.id;
  });

  useEffect(() => {
    // Update the ref when searchResults change
    runtimeFinder.current = runtimeFinder;
  }, [searchResults]);

  useEffect(() => {
    const fetchRuntimes = async () => {
      const runtimeData: { [key: number]: number } = {};

      for (const movieId of runtimeFinder) {
        // Use the pre-defined runtimeFinder array
        try {
          const responseRuntime: AxiosResponse<{ runtime: number }> =
            await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
              headers: {
                accept: "application/json",
                Authorization: "Bearer " + ACCCESS_TOKEN,
              },
            });

          runtimeData[movieId] = responseRuntime.data.runtime;
        } catch (errorRuntime: any) {
          console.error(
            `Error fetching runtime for movie ${movieId}`,
            errorRuntime
          );
        }
      }

      setMovieRuntimes(runtimeData);
    };

    fetchRuntimes();
  }, [runtimeFinder]); // Update when runtimeFinder changes

  const movieGenres = searchResults.map((movie: Movie, index: number) => {
    return movie.genre_ids.map((genreId: number) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : "";
    });
  });

  const handleMovieCardClick = (movieId: number) => {
    // Use the navigate function to navigate to the movie details page
    navigate(`/movies/${movieId}`);
  };

  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      // Redirect to the first page if page is less than 1
      // Redirect to the last page if page is greater than totalPages
      navigate(`/search/${searchTerms}?page=1`);
    }
  }, [currentPage, navigate, searchTerms, totalPages]);

  // Function to handle navigation to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = (currentPage - 1).toString();
      navigate(`/search/${searchTerms}?page=${prevPage}`);
    }
  };

  // Function to handle navigation to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = (currentPage + 1).toString();
      navigate(`/search/${searchTerms}?page=${nextPage}`);
    }
  };

  return (
    <>
      <Header />
      <div className="container search-wrap">
        <div className="row align-items-center results">
          <div className="col-11">
            <h2 className="search-results">Search Results</h2>
          </div>
          <div className="col">
            <p className="records">{searchResults.length} Records</p>
          </div>
        </div>
        <div className="row search-results-movies">
          {searchResults.map((movie: Movie, index: number) => {
            return (
              <div className="col-1" key={movie.id}>
                {/* Use the onClick event to handle the card click */}
                <div
                  className="link"
                  onClick={() => handleMovieCardClick(movie.id)}
                >
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    genre={movieGenres[index].join("/")}
                    rate={movie.vote_average}
                    date={
                      `${
                        typeof movieRuntimes[movie.id] === "number" &&
                        !isNaN(movieRuntimes[movie.id])
                          ? `${Math.floor(movieRuntimes[movie.id] / 60)}h ${
                              movieRuntimes[movie.id] % 60 === 0
                                ? ""
                                : (movieRuntimes[movie.id] % 60) + "m"
                            }`
                          : "Unknown"
                      } / ` + dayjs(movie.release_date).format("YYYY")
                    }
                    style={{
                      backgroundImage: `url(${url(movie.poster_path)})`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination Buttons */}
        <div className="navigation align-self-center justify-content-center container">
          <nav aria-label="Page ">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <a
                  className="page-link"
                  href={`/search/${searchTerms}?page=${currentPage - 1}`}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {/* Dynamically generate pagination buttons */}
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                >
                  {/* Use the Link component to handle navigation */}
                  <Link
                    className="page-link"
                    to={`/search/${searchTerms}?page=${index + 1}`}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <a
                  className="page-link"
                  href={`/search/${searchTerms}?page=${currentPage + 1}`}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Search;
