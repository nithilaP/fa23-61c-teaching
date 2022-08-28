import React from "react";
import Content from "./Content";
import "../styles/Body.css";

export default function Week({ num, mStart, mEnd, dStart, dEnd, content }) {
  return (
    <>
      <p className="current-week">
        {" "}
        <b>
          week {num}: {mStart}/{dStart} - {mEnd}/{dEnd}
        </b>{" "}
      </p>
      <div>
        {content.reverse().map((num) => (
          // disc, lab
          <Content num={num[0]} labTitle={num[1]} discTitle={num[2]} attend={num[3]} sol={num[4]} />
        ))}
      </div>
    </>
  );
}
