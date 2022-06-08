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
            <a className="link" href="/" rel="noreferrer">Ed???</a>
        </div>
        <div className="link-div">
            <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Attendance</a>
        </div>
        <div className="link-div">
            <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Feedback</a>
        </div>
      </div>
      <div className="times-container">
        <p className="times"> Labs: </p>
        <p className="times"> Discussions: </p>
      </div>
    </div>
  );
}
