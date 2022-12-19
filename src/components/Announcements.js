import React from "react";
import "../styles/Body.css";

export default function Announcements() {
  return (
    <div className="announcements-container">
      <div className="title-div">
        <h1 className="title"> Announcements </h1>
      </div>
      <p className="announcements">
        {" "}
        yo, you're here kinda early...
      </p>
    </div>
  );
}
