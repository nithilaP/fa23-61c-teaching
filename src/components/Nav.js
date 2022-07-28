import React from "react";
import "../styles/Nav.css";
import { useKonami } from 'react-konami-code';

export default function Nav() {
  useKonami(() => {
    alert('[konami]');
  });
  return (
    <div className="sidebar-container">
      <div className="pfp-container">
        <div className="switch" title="[boo]">
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
            <a className="link" href="https://piazza.com/class/l3b5tbgw9il4kj" target="_blank" rel="noreferrer">Piazza</a>
        </div>
        <div className="link-div">
            <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSefWVPJbJdIx-04gaA_fNsMvUo6Nw6cZ5U8P5AopHfdND4iEg/viewform" target="_blank" rel="noreferrer">Feedback</a>
        </div>
        <div className="link-div">
            <a className="link" href="https://forms.gle/skABhXqM5YZbhpa29" target="_blank" rel="noreferrer">Easter Eggs</a>
        </div>
      </div>
      <div className="times-container">
        <p className="times"> <b>Lab:</b> M/W 9:30-11:00  AM @ <b>Soda 330</b> </p>
        <p className="times"> <b>Disc: </b>Tu/Th 1:00-2:30PM @ <b>Soda 306</b> </p>
        <p className="times"> <b>Office Hours:</b> 
        <br></br> M 1:00-2:00 PM @ <b> Cory 293</b>
        <br></br> Th 3:00-4:00 PM @ <b> Cory 521</b> <br></br>Fr 2:00-3:00 PM @ <b> Cory 521</b>  </p>
      </div>
    </div>
  );
}
