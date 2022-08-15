import React from "react";
import "../styles/Body.css";

const links = {
  disc: "https://cs61a.org/disc/",
  lab: "https://cs61a.org/lab/",
  slides: "https://slides.aditbala.com/su22/",
};

const discForm = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const labForm = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export default function Content({ num, title, discSol, labSol }) {
  return (
    <>
      <div className="wrapper">
        <p className="week">
          lab {num}: {title}
        </p>
        <a
          href={labForm}
          target="_blank"
          className="button slides"
          rel="noreferrer"
        >
          {" "}
          attendance{" "}
        </a>
        <a
          href={links.lab + `lab${num}`}
          target="_blank"
          className="button slides"
          rel="noreferrer"
        >
          assignment{" "}
        </a>
        {labSol && (
          <a
            href={links.lab + `sol-lab${num}`}
            target="_blank"
            className="button slides"
            rel="noreferrer"
          >
            {" "}
            solution{" "}
          </a>
        )}
      </div>
      <div className="wrapper">
        <p className="week">
          {" "}
          disc {num}: {title}{" "}
        </p>
        <a
          href={discForm}
          target="_blank"
          className="button slides"
          rel="noreferrer"
        >
          {" "}
          attendance{" "}
        </a>
        <a
          href={links.disc + `disc${num}`}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          {" "}
          assignment{" "}
        </a>
        {discSol && (
          <a
            href={links.disc + `sol-disc${num}`}
            target="_blank"
            className="button slides"
            rel="noreferrer"
          >
            {" "}
            solution{" "}
          </a>
        )}
      </div>
      <div className="wrapper">
        <p className="week"> slides {num}: </p>
        <a
          href={links.slides + `disc${num}`}
          target="_blank"
          className="button slides"
          rel="noreferrer"
        >
          html
        </a>
        <a
          href={links.slides + `disc${num}.pdf`}
          target="_blank"
          className="button slides"
          rel="noreferrer"
        >
          pdf
        </a>
      </div>
      <br></br>
    </>
  );
}
