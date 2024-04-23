import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App  from './App';
import  Premium  from './components/Premium/Premium';
import  Movie  from './components/Movie/Movie';
import  reportWebVitals  from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { SignUp } from './components/SignUp/SignUp';
import { Search } from './components/Search/Search';
import { NotFound } from './components/NotFound/NotFound';
import { Movies } from './components/Movies/Movies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Navbar />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/movies/:movieId" Component={Movie} />
      <Route path="*" element={<NotFound />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/search/:searchTerms" element={<Search />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  </BrowserRouter>
  <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
