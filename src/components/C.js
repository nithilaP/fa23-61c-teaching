import React from "react";
import NavC from "./NavC";
import "../styles/C.css";

function Main() {
  return (
    <div className="page">
      <NavC/>
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
                <p className="week">{`Discussion ${i < 10 ? `0` + i : i}: `}</p>
                <a
                  href={`https://slides.aditbala.com/61c/su23/disc${
                    i < 10 ? `0` + i : { i }
                  }`}
                  target="_blank"
                  className="button slides_button"
                  rel="noopener noreferrer"
                >
                  <span className="btn_label">Slides</span>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1H1.80004M9 1L9.00002 4.55556L9.00005 8.11111"
                      stroke="white"
                    />
                  </svg>
                </a>
                <a
                  href={`https://cs61c.org/sp23/discussions/disc${
                    i < 10 ? `0` + i : { i }
                  }`}
                  target="_blank"
                  className="button worksheet_button"
                  rel="noopener noreferrer"
                >
                  <span className="btn_label">Worksheet</span>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1H1.80004M9 1L9.00002 4.55556L9.00005 8.11111"
                      stroke="black"
                    />
                  </svg>
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
