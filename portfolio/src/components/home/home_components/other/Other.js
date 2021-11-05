import React from "react";
import "./Other.css";

function Other(props) {
  return (
    <div className="other-cont">
      <img src={props.img} alt="img" />
      <div className="other-details">
        <p>{props.name}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"
            fill="rgb(255, 255, 255)"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Other;
