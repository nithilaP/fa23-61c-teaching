import React from "react";
import "../styles/Body.css";

export default function Body() {
  return (
    <div className="body-container">
      <div className="announcements-container">
        <div className="title-div">
          <h1 className="title"> Announcements </h1>
        </div>
        <p className="announcements">Welcome to CS 61A!!!</p>
      </div>
      <div className="container">
        <div className="title-div">
          <h1 className="title"> Weekly Materials </h1>
        </div>
        <div className="container">
          <div className="week-div">
            <p className="current-week">
              {" "}
              <b>week 1: 8/25 - 8/27</b>{" "}
            </p>
            <div className="wrapper">
              <p className="week">lab 00: getting started</p>
              <a target="_blank" className="button" rel="noreferrer">
                {" "}
                assignment{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 00: getting started </p>
              <a
                href="https://forms.gle/h7wcDKQrqUGofLnh9"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a target="_blank" className="button" rel="noreferrer">
                {" "}
                assignment{" "}
              </a>
              <a target="_blank" className="button" rel="noreferrer">
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 00: </p>
              <a href="https://slides.aditbala.com/su22/disc00" target="_blank" className="button slides" rel="noreferrer">
                html
              </a>
              <a
                href="https://slides.aditbala.com/su22/disc00.pdf"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                pdf
              </a>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
