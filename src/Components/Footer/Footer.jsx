import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="row" style={{ backgroundColor: "#282A35" }}>
        <div className="col-md-6 mt-5 box10 mb-5">
          <h6
            style={{
              color: "black",
              display: "inline-block",
              backgroundColor: "white",
              padding: "10px",
              margin: "4px",
              borderRadius: "5px",
            }}
          >
            COURSES
          </h6>
          <h6
            style={{
              color: "black",
              display: "inline-block",
              backgroundColor: "white",
              padding: "10px",
              margin: "4px",
              borderRadius: "5px",
            }}
          >
            QUIZZES
          </h6>
          <h6
            style={{
              color: "black",
              display: "inline-block",
              backgroundColor: "white",
              padding: "10px",
              margin: "4px",
              borderRadius: "5px",
            }}
          >
            EXERCISES
          </h6>
          <h6
            style={{
              color: "black",
              display: "inline-block",
              backgroundColor: "white",
              padding: "10px",
              margin: "4px",
              borderRadius: "5px",
            }}
          >
            PRO
          </h6>
          <h6
            style={{
              color: "black",
              display: "inline-block",
              backgroundColor: "white",
              padding: "10px",
              margin: "4px",
              borderRadius: "5px",
            }}
          >
            SPACES
          </h6>
        </div>
        <div className="col-md-6 box10 mt-5 mb-5">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                FORUM
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#282A35" }}>
        <div className="col-12 p-5">
          <p style={{ color: "white" }}>
            W3Schools is optimized for learning, testing, and training. Examples
            might be simplified to improve reading and basic understanding.
            Tutorials, references, and examples are constantly reviewed to avoid
            errors, but we cannot warrant full correctness of all content. While
            using this site, you agree to have read and accepted our terms of
            use, cookie and privacy policy. Copyright 1999-2022 by Refsnes Data.
            All Rights Reserved.
          </p>
        </div>
        <div className="col-12" style={{ textAlign: "center" }}>
          <div>
            <button type="button" className="btn box28 mb-4 mt-4">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
