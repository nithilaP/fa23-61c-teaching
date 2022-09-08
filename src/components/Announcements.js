import React from "react";
import "../styles/Body.css";

export default function Announcements() {
  return (
    <div className="announcements-container">
      <div className="title-div">
        <h1 className="title"> Announcements </h1>
      </div>
      <p className="announcements">Read <a href="https://edstem.org/us/courses/25379/discussion/1739561">Midterm Logistics Post</a></p>
    </div>
  );
}
