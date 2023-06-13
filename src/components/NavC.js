import React from "react";
import "../styles/Nav.css";
import { useKonami } from 'react-konami-code';

// Obfuscate funciton
export default function Nav() {
  useKonami(() => {
    alert('[konami]');
  });
  return (
    <div className="sidebar-container">
      <div className="pfp-container">
        <div className="switch" title="[boo]"></div>
      </div>
      <div className="divider"></div>
      <div className="title-container">
        <div className="name-div">
          <h1 className="name"> Aditya Balasubramanian</h1>
        </div>
        <p className="email"> aditbala [at] berkeley [dot] edu</p>
        <h5 className="position"> Summer 2023 CS 61C TA </h5>
      </div>
      <div className="navbar">
        <div className="link-div">
          <a
            className="link"
            href="https://cs61c.org/"
            target="_blank"
            rel="noreferrer"
          >
            Course Website
          </a>
        </div>
        <div className="link-div">
          <a
            className="link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSefWVPJbJdIx-04gaA_fNsMvUo6Nw6cZ5U8P5AopHfdND4iEg/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Feedback
          </a>
        </div>

        {/* <div className="link-div">
          <a
            className="link"
            href="https://forms.gle/skABhXqM5YZbhpa29"
            target="_blank"
            rel="noreferrer"
          >
            Easter Eggs
          </a>
        </div> */}
      </div>
      <div className="times-container">
        {/* <p className="times">
          {" "}
          <b>Lab:</b> Tu 3:30 - 5:00 PM @ <b> SODA 271</b>{" "}
        </p> */}
        <p className="times">
          {" "}
          <b>Discussion: </b>
           TBD @ <b> TBD</b>{" "}
        </p>
        <p className="times">
          {" "}
          <b>Office Hours: </b>
           TBD @ <b> TBD</b>{" "}
        </p>
      </div>
    </div>
  );
}
