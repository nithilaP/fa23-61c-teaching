import React from "react";
import Content from "./Content";
import "../styles/Body.css";

export default function Week({ num, month, start, end, content }) {
  return (
    <>
      <p className="current-week">
        {" "}
        <b>
          week {num}: {month}/{start} - {month}/{end}
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
