import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./Movie.css";
import dayjs from "dayjs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PeopleCard } from "../Card/components/PeopleCard/PeopleCard";

const ACCCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTdjYzU4OTAzYzAyZWQ4Y2ZiYjQzZTE0NTE1NjY3NCIsInN1YiI6IjY0YmY3NzkwMDE3NTdmMDExY2E4ODcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lwtqnzSkXwmE9NpmC_tOG9ZcO7imBaqvK4j843d8xUY";

const Movie = (props: any) => {
  const [movie, setMovie] = useState<any | null>(null); // Change the initial state to null
  const [movieImages, setMovieImages] = useState<any | null>(null); // Change the initial state to null
  const [movieCredits, setMovieCredits] = useState<any | null>(null); // Change the initial state to null
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Access the movie data from the location state
        const movieData: any | undefined = location.state?.movieData;
        if (movieData) {
          setMovie(movieData);
        } else {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${ACCCESS_TOKEN}`,
              },
            }
          );
          setMovie(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [movieId, location.state]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const movieCredits: any | undefined = location.state?.movieData;
        if (movieCredits) {
          setMovie(movieCredits);
        } else {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${ACCCESS_TOKEN}`,
              },
            }
          );
          setMovieCredits(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieCredits();
  }, [movieId, location.state]);

  const fetchMovieDirector = () => {
    const director = movieCredits?.crew.find(
      (member: any) => member.job === "Director"
    );
    return director?.name;
  };

  const ageRating = movie?.adult ? "18+ " : "13+ ";
  const percentage = movie?.vote_average * 10;

  if (!movie) {
    return <div>Loading...</div>; // Add a loading state while waiting for the movie data
  }

  return (
    <div>
      <div
        className="container-fluid movie-header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className="landing container">
          <div className="row">
          <div className="col-3">
              {/* No Image condition */}
              {movie.poster_path ? (
                <a href={"https://image.tmdb.org/t/p/original/" + movie.poster_path}>
                  <img
                    src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                    alt="poster"
                    className="poster"
                  />
                </a>
              ) : (
                <div className="no-image-container">
                  <img
                    src="https://via.placeholder.com/200x300?text=No+Image"
                    alt="No Poster Available"
                    className="no-image"
                  />
                </div>
              )}
              {/* ... (rest of the code) */}
            </div>
            <div className="col-md-6">
              <div className="info">
                <div className="row">
                  <div className="col-10 d-flex">
                    <h1>{movie.title}</h1>
                    <h1 className="release-date">
                      &nbsp;
                      {"(" + dayjs(movie.release_date).format("YYYY") + ")"}
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex">
                    <p>{ageRating}&nbsp;</p>
                    <p>{movie.release_date}&nbsp;&nbsp;</p>
                    <p>
                      {`${Math.floor(movie.runtime / 60)}h ${
                        (movie.runtime & 60) == 0
                          ? ""
                          : (movie.runtime & 60) + "m"
                      }`}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col circle">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <h4 className="tagline">{movie.tagline}</h4>
                  <div className="col">
                    <h3>Overview</h3>
                  </div>
                  <p>{movie.overview}</p>
                </div>
                <div className="row">
                  <div className="col">
                    <PeopleCard
                      className={undefined}
                      name={fetchMovieDirector}
                    />
                  </div>
                  <div className="col">
                    <PeopleCard className={undefined} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
