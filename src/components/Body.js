import React from "react";
import Week from "./Week";
import "../styles/Body.css";
import Announcements from "./Announcements";

export default function Body() {
  return (
    <div className="body-container">
      <Announcements />
      <div className="container">
        <div className="title-div">
          <h1 className="title"> Weekly Materials </h1>
        </div>
        <div className="container">
          <div className="week-div">
            <Week
              num="01"
              month="8"
              start="24"
              end="26"
              content={[
                ["00", "Getting Started", [true, false], [false, false]],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
