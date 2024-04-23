import React, { useEffect, useState } from "react";
import { Image } from "../Image/Image";
import axios from "axios";
import "./style.css";

export const MovieCard = (props: any) => {
  return (
    <div className={`movie-card ${props.className}`}>
      <Image className="image-4" style={props.style} />
      <div className="seperator" />
      <div className="title">{props.title}</div>
      <div className="div" />
      <div className="genre">{props.genre}</div>
      <div className="seperator-2" />
      <div className="rating">
        <div className="time-year">{props.date}</div>
        <div className="rate">
          <div className="overlap-group">
            <div className="element">{props.rate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};