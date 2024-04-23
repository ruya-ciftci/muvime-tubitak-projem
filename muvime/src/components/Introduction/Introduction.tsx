import React, { useEffect } from "react";
import "./Introduction.css";

export const Introduction = () => {

  return (
    <div className="container-fluid wrap">
      <div className="px-4 py-5 my-5 text-center">
        <a href="/premium" className="premium btn-lg px-4">
          Get Premium
        </a>
        <p className="tmdb-advantage">The TMDB Advantage</p>
        <div className="col-lg-12 mx-auto">
          <h1 className="h1">
            Millions of movies, TV shows and people to discover. Explore now.
          </h1>
          <p className="lead mb-4">
            The Movie Database (TMDB) is a community built movie and TV
            database. Every piece of data has been added by our amazing
            community dating back to 2008. TMDb's strong international focus and
            breadth of data is largely unmatched and something we're incredibly
            proud of. Put simply, we live and breathe community and that's
            precisely what makes us different.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
    </div>
  );
};
