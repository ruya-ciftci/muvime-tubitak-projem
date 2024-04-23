import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          MUVIME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/movies">
                Filmler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Series">
                Diziler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Persons">
                Kişiler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="addition">
                Daha Fazla +
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
        </div>
      </div>
      <div className="dropdown">
        <button
          className="lang"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          EN
        </button>
      </div>

      <div className="row name-occup">
        <div className="name">Serkan Konakçı</div>

        <div className="occupation">FrontEnd Developer</div>
      </div>
      <img
        src="data:image/jpeg;base64,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"
        alt="mdo"
        width="32"
        height="32"
        className="rounded-circle pp"
      ></img>
    </nav>
  );
};
