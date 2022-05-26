import React from "react";
import "../styles/Body.css";

export default function Body() {
  return (
    <div className="body-container">
      <div className="announcements-container">
        <div className="title-div">
          <h1 className="title"> Announcements </h1>
        </div>
        <p className="announcements">
          Welcome to cs 61a! make sure to check the course website for classwide
          announcements!
        </p>
      </div>
      <div className="container">
        <div className="title-div">
          <h1 className="title"> Weekly Materials </h1>
        </div>
        <div className="container">
          <div className="week-div">
            <div className="wrapper">
              <p className="week">
                lab 00: getting started (optional; no session)
              </p>
              <button> assignment </button>
            </div>
            <div className="wrapper">
              <p className="week"> disc 00: getting started </p>
              <button> slides </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
