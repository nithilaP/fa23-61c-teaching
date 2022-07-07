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
          <p className="current-week">
              {" "}
              <b>week 3: 7/5 - 7/8</b>{" "}
            </p>
            <div className="wrapper">
              <p className="week">lab 04: Sequences </p>
              <a
                
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                
                assignment{" "}
              </a>
              <a className="button"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 04: Sequences</p>
              <a
                href="https://tinyurl.com/adit-disc04"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc04/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                assignment
              </a>
              <a
                href="https://cs61a.org/disc/sol-disc04/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 04: </p>
              <a
                href="https://slides.aditbala.com/su22/disc04"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                html
              </a>
              <a
                href="https://slides.aditbala.com/su22/disc04.pdf"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                pdf
              </a>
            </div>
            
            <br></br>
            <div className="wrapper">
              <p className="week">lab 05: Midterm Review </p>
              <a
                
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                
                assignment{" "}
              </a>
              <a className="button"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 05: Mutability, OOP</p>
              <a
                href="https://tinyurl.com/adit-disc05"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc05/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                assignment
              </a>
              <a
                
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 04: </p>
              <a
                href="https://slides.aditbala.com/su22/disc05"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                html
              </a>
              <a
                href="https://slides.aditbala.com/su22/disc05.pdf"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                pdf
              </a>
            </div>
            
            <br></br>
            <p className="current-week">
              {" "}
              <b>week 2: 6/27 - 7/1</b>{" "}
            </p>
            <div className="wrapper">
              <p className="week">lab 02: HOF, Environment Diagrams </p>
              <a
                href="https://tinyurl.com/adit-lab02"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/lab/lab02/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                
                assignment{" "}
              </a>
              <a href="https://cs61a.org/lab/sol-lab02/"
                target="_blank"
                className="button slides"
                rel="noreferrer"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 02: Environment Diagrams, HOF</p>
              <a
                href="https://tinyurl.com/adit-disc02"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc02/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                assignment
              </a>
              <a
                href="https://cs61a.org/disc/sol-disc02/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 02: </p>
              <a
                href="https://slides.aditbala.com/su22/disc02"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                html
              </a>
              <a
                href="https://slides.aditbala.com/su22/disc02.pdf"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                pdf
              </a>
            </div>
            <br></br>
            <div className="wrapper">
              <p className="week">lab 03: Recursion, Tree Recursion </p>
              <a
                href="https://tinyurl.com/adit-lab03"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/lab/lab03/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                
                assignment{" "}
              </a>
              <a className="button"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 03: Recursion, Tree Recursion </p>
              <a
                href="https://tinyurl.com/adit-disc03"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc03/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                assignment
              </a>
              <a
                href="https://cs61a.org/disc/sol-disc03/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 03: </p>
              <a
                href="https://slides.aditbala.com/su22/disc03"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                html
              </a>
              <a
                href="https://slides.aditbala.com/su22/disc03.pdf"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                pdf
              </a>
            </div>
            <br></br>
            <p className="current-week">
              {" "}
              <b>week 1: 6/21 - 6/24</b>{" "}
            </p>
            <div className="wrapper">
              <p className="week">lab 00: getting started</p>
              <a
                href="https://cs61a.org/lab/lab00/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> disc 00: getting started </p>
              <a
                href="https://tinyurl.com/adit-welcome"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc00/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
              <a
                href="https://cs61a.org/disc/sol-disc00/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 00: </p>
              <a
                href="https://slides.aditbala.com/su22/disc00"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
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
            <div className="wrapper">
              <p className="week">lab 01: Variables and Functions, Control </p>
              <a
                href="https://tinyurl.com/adit-lab01"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://tinyurl.com/adit-study"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                study group{" "}
              </a>
              <a
                href="https://cs61a.org/lab/lab01/"
                target="_blank"
                className="button"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
              <a className="button"> solution </a>
            </div>
            <div className="wrapper">
              <p className="week">
                {" "}
                disc 01: Variables and Functions, Control{" "}
              </p>
              <a
                href="https://forms.gle/JTQSuP9PVVGNY58u7"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                attendance{" "}
              </a>
              <a
                href="https://cs61a.org/disc/disc01/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                assignment{" "}
              </a>
              <a
                href="https://cs61a.org/disc/sol-disc01/"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
                {" "}
                solution{" "}
              </a>
            </div>
            <div className="wrapper">
              <p className="week"> slides 01: </p>
              <a
                href="https://slides.aditbala.com/su22/disc01"
                target="_blank"
                className="button slides"
                rel="noreferrer"
              >
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
          </div>
        </div>
      </div>
    </div>
  );
}
