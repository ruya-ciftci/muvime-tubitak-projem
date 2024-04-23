import { useEffect, useState } from "react";
import "./Slider.css";
import { MovieCard } from "../Card/components/MovieCard/MovieCard";
import axios from "axios";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export const ACCCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTdjYzU4OTAzYzAyZWQ4Y2ZiYjQzZTE0NTE1NjY3NCIsInN1YiI6IjY0YmY3NzkwMDE3NTdmMDExY2E4ODcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwtqnzSkXwmE9NpmC_tOG9ZcO7imBaqvK4j843d8xUY";

let START = 0;
let END = 6;

export const Slider = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [genres, setGenres] = useState<any[]>([]);
  const [isMore, setIsMore] = useState(false);
  const [runtimes, setRuntimes] = useState<any[]>([]);

  const navigate = useNavigate();

  const moreHandler = () => {
    if (isMore === false) {
      setIsMore(true);
      END = 12;
    } else {
      setIsMore(false);
      END = 6;
    }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCCESS_TOKEN}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const url = movies.slice(START, END).map((movie) => {
    return "https://image.tmdb.org/t/p/original" + movie.poster_path;
  });

  const runtimeFinder = movies.slice(START, END).map((runtimeHelper) => {
    return runtimeHelper.id;
  });

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const responseGenre = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + ACCCESS_TOKEN,
            },
          }
        );
        const genres = responseGenre.data.genres;
        setGenres(genres);
      } catch (errorGenre: any) {
        console.error(errorGenre);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchRuntimeForMovies = async () => {
      try {
        if (runtimeFinder.length === 0) return; // Don't make API requests if there are no movie IDs

        const runtimeRequests = runtimeFinder.map(async (id) => {
          const responseRuntime = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {
              headers: {
                accept: "application/json",
                Authorization: "Bearer " + ACCCESS_TOKEN,
              },
            }
          );
          return responseRuntime.data.runtime;
        });

        const runtimes = await Promise.all(runtimeRequests);
        setRuntimes(runtimes); // Update the state with the fetched runtimes
      } catch (errorRuntime: any) {
        console.error(errorRuntime);
      }
    };
    fetchRuntimeForMovies();
  }, [runtimeFinder]);

  const handleMovieCardClick = (movieId: number) => {
    // Use the navigate function to navigate to the movie details page
    navigate(`/movies/${movieId}`);
  };

  return (
    <div className="slider-container">
      <div className="slider-title flex-row d-flex align-items-center justify-content-between">
        <h2 className="popular-title">What's Popular</h2>
        <a className="more justify-content-end" onClick={moreHandler}>
          More
        </a>
      </div>
      <div className="row align-items-center cards">
        {movies.slice(START, END).map((movie, index) => {
          const movieGenres = movie.genre_ids.map((genreId: any) => {
            const genre = genres.find((genre) => genre.id === genreId);
            return genre ? genre.name : "";
          });

          return (
            movie.poster_path && (
              <div className="col-md-2 movie-card-slider" key={movie.id}>
                {/* Use the onClick event to handle the card click */}
                <div className="link" onClick={() => handleMovieCardClick(movie.id)}>
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    genre={movieGenres.join("/")}
                    rate={movie.vote_average}
                    date={`${Math.floor(runtimes[index] / 60)}h ${
                      (runtimes[index] & 60) == 0 ? "" : (runtimes[index] & 60) + "m"
                    } / ` + dayjs(movie.release_date).format("YYYY")}
                    style={{
                      backgroundImage: `url(${url[index] ?? ""})`,
                    }}
                    className="col-1"
                  />
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
