import React from "react";
import "../styles/Body.css";
import Announcements from "./Announcements";
import Week from "./Week";

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
              num="14"
              mStart="4"
              dStart="17"
              mEnd="4"
              dEnd="21"
              content={{
                num: "12",
                lt: "Scheme Lists, Interpreters",
                dt: "Interpreters, SQL",
                at: [true, true],
                sol: [false, false],
              }}
            />
          <Week
              num="13"
              mStart="4"
              dStart="10"
              mEnd="4"
              dEnd="14"
              content={{
                num: "11",
                lt: "Scheme",
                dt: "Scheme, Scheme Lists",
                at: [true, true],
                sol: [true, true],
              }}
            />
            <Week
              num="10"
              mStart="3"
              dStart="20"
              mEnd="3"
              dEnd="24"
              content={{
                num: "09",
                lt: "Mutable Trees, Efficiency",
                dt: "Mutable Trees, Linked Lists, Efficiency",
                at: [true, false],
                sol: [false, false],
              }}
            />
            <Week
              num="9"
              mStart="3"
              dStart="13"
              mEnd="3"
              dEnd="17"
              content={{
                num: "08",
                lt: "OOP, Inheritance",
                dt: "OOP, Inheritance, Str/Repr",
                at: [true, true],
                sol: [true, true],
              }}
            />
            <Week
              num="8"
              mStart="3"
              dStart="06"
              mEnd="3"
              dEnd="10"
              content={{
                num: "07",
                lt: "Object-Oriented Programming",
                dt: "Object-Oriented Programming",
                at: [true, true],
                sol: [true, true],
              }}
            />
            <Week
              num="7"
              mStart="2"
              dStart="27"
              mEnd="3"
              dEnd="03"
              content={{
                num: "06",
                lt: "Mutability, Iterators, Generators",
                dt: "Mutability, Iterators",
                at: [true, true],
                sol: [true, true],
              }}
            />
            <Week
              num="6"
              mStart="2"
              dStart="20"
              mEnd="2"
              dEnd="24"
              content={{
                num: "05",
                lt: "Data Abstraction, Sequences",
                dt: "Trees",
                at: [true, true],
                sol: [true, true],
              }}
            />
            <Week
              num="5"
              mStart="2"
              dStart="13"
              mEnd="2"
              dEnd="17"
              content={{
                num: "04",
                lt: "Recursion, Tree Recursion, Python Lists ",
                dt: "Tree Recursion, Python Lists",
                at: [true, true],
                sol: [true, true],
              }}
            />
            <Week
              num="4"
              mStart="2"
              dStart="06"
              mEnd="2"
              dEnd="10"
              content={{
                num: "03",
                lt: "Recursion",
                dt: "Recursion",
                at: [false, true],
                sol: [false, true],
              }}
            />
            <Week
              num="3"
              mStart="1"
              dStart="30"
              mEnd="2"
              dEnd="03"
              content={{
                num: "02",
                lt: "HOF, Lambda Expressions",
                dt: "Environment Diagrams, HOF",
                at: [true, true],
                sol: [true, true],
              }}
            />
            <Week
              num="2"
              mStart="1"
              dStart="23"
              mEnd="1"
              dEnd="27"
              content={{
                num: "01",
                lt: "Functions, Control",
                dt: "Control, Environment Diagrams",
                at: [true, true],
                sol: [true, true],
              }}
            />
            <Week
              num="1"
              mStart="1"
              dStart="18"
              mEnd="1"
              dEnd="20"
              content={{
                num: "00",
                lt: "Getting Started",
                dt: "Getting Started",
                at: [true, true],
                sol: [false, true],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
