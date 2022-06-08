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
            <p className="current-week"> week 1: 6/21 - 6/24 </p>
            <div className="wrapper">
              <p className="week">
                lab 00: getting started (optional; no session)
              </p>
              <a className="button"> assignment </a>
              <a className="button"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 00: getting started </p>
              <a className="button"> assignment </a>
              <a className="button"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 00: </p>
              <a href="https://slides.aditbala.com/su22/disc00" target="_blank" class="button slides" rel="noreferrer">html</a>
              <a href="https://slides.aditbala.com/su22/disc00.pdf" target="_blank" class="button slides" rel="noreferrer">pdf</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
