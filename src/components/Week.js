import React from "react";
import Content from "./Content";
import "../styles/Body.css";

export default function Week({ num, month, mStart, mEnd, dStart, dEnd, content }) {
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
          <Content num={num[0]} title={num[1]} attend={num[2]} sol={num[3]} />
        ))}
      </div>
    </>
  );
}
