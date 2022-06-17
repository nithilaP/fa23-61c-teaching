import React from "react";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div className="sidebar-container">
      <div className="pfp-container">
        <div className="switch">
        </div>
      </div>
      <div className="divider"></div>
      <div className="title-container">
          <div className="name-div">
              <h1 className="name"> Aditya Balasubramanian</h1>
          </div>
          <p className="email"> aditbala [at] berkeley [dot] edu</p>
          <h5 className="position"> Summer 2022 CS 61A uGSI </h5> 
      </div>
      <div className="navbar">
        <div className="link-div">
            <a className="link" href="https://cs61a.org/" target="_blank" rel="noreferrer">Course Website</a>
        </div>
        <div className="link-div">
            <a className="link" href="https://piazza.com/class/l3b5tbgw9il4kj" rel="noreferrer">Piazza</a>
        </div>
        <div className="link-div">
            <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Attendance</a>
        </div>
        <div className="link-div">
            <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Feedback</a>
        </div>
      </div>
      <div className="times-container">
        <p className="times"> Labs: M/W 9:30-10:30  AM @ <b>Soda 330</b> </p>
        <p className="times"> Disc: Tu/Th 1:00-2:30PM @ <b>Soda 306</b> </p>
      </div>
    </div>
  );
}
