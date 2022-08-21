import React from "react";
import "../styles/Body.css";

const year = "fa22"

const links = {
  disc: "https://cs61a.org/disc/",
  lab: "https://cs61a.org/lab/",
  slides: `https://slides.aditbala.com/${year}/`,
  attendanceDisc: "https://tinyurl.com/adit-disc",
  attendanceLab: "https://tinyurl.com/adit-lab",
};

export default function Content({ num, title, attend, sol }) {
  return (
    <>
      {attend[1] && (
        <div className="wrapper">
          <p className="week">
            lab {num}: {title}
          </p>
          {num != `00` && (<a
            href={links.attendanceLab + `${num}`}
            target="_blank"
            className="button slides"
            rel="noreferrer"
          >
            {" "}
            attendance{" "}
          </a>)}

          <a
            href={links.lab + `lab${num}`}
            target="_blank"
            className="button slides"
            rel="noreferrer"
          >
            assignment{" "}
          </a>
          {sol[1] && (
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
      )}
      {attend[0] && (
        <div className="wrapper">
        <p className="week">
          {" "}
          disc {num}: {title}{" "}
        </p>

        <a
          href={links.attendanceDisc + `${num}`}
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
        {sol[0] && (
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
      )}
      <div className="wrapper">
        <p className="week"> slides {num}: </p>
        <a
          href={links.slides + `disc${num} `}
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
