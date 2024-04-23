import React from "react";
import "./style.css";

export const Image = (props: any) => {
  return <div 
  className={`image ${props.className}`}
  style={props.style}
   />;
};
