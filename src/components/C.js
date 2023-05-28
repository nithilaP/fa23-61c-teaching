import React from "react";
import NavC from "./NavC";
import "../styles/Body.css";

function Main() {
  return (
    <div className="page">
      <NavC></NavC>
      <div className="body-container">
        <div className="announcements-container">
          <div className="title-div">
            <h1 className="title"> Weekly Materials </h1>
          </div>
        </div>
        <div className="container">
          <div className="week-div">
            {Array.from({ length: 13 }, (_, i) => i + 1).map((i) => (
              <div className="wrapper">
                <p className="week">Discussion{i}:</p>
                <a
                  href={`https://slides.aditbala.com/61c/su23/disc${
                    i < 10 ? `0` + i : { i }
                  }`}
                  target="_blank"
                  className="button slides"
                  rel="noreferrer"
                >
                  slides
                </a>
                <a
                  href={`https://cs61c.org/sp23/discussions/disc${
                    i < 10 ? `0` + i : { i }
                  }`}
                  target="_blank"
                  className="button slides"
                  rel="noreferrer"
                >
                  worksheet
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
