import React from "react";
import "./LandingPage.css";
import Img4 from "../../Images/Screenshot (603).png";
import Img5 from "../../Images/Screenshot (604).png";
import Img6 from "../../Images/Screenshot (606).png";
import Img7 from "../../Images/photo-1453745670966-10d9449f5b12.jpg";
import Img8 from "../../Images/frances-gunn-T8gIOL3_sdI-unsplash.jpg";
import Img9 from "../../Images/1516863847617.jpg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="row box1">
        <div className="col-8 mx-auto maindiv">
          <div className="box2">
            <h1 className="heading1">Learn to Code</h1>
          </div>
          <div className="box3">
            <h3 className="heading2">With the World Largest Developer site</h3>
          </div>
          <div className="box4">
            <input
              className="form-control searchbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="box5">
            <h4>
              <Link className="box23" to="/" >Not Sure Where to Begin</Link>
            </h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: "#D9EEE1" }}>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "80px", marginTop: "60px" }}>HTML</h1>
            <h5>
              <strong>The language for building web pages</strong>
            </h5>
            <div className="mb-4 mt-4">
              <button type="button" className="btn btn-lg btn1">
                Learn HTML
              </button>
            </div>
            <div className="mb-4">
              <button type="button" className="btn btn-lg btn2">
                <strong>Video Tutorials</strong>
              </button>
            </div>
            <div style={{ marginBottom: "60px" }}>
              <button type="button" className="btn btn-lg btn3">
                HTML Reference
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: "#FFF4A3" }}>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "80px", marginTop: "60px" }}>CSS</h1>
            <h5>
              <strong>The language for styling web pages</strong>
            </h5>
            <div className="mb-4 mt-4">
              <button type="button" className="btn btn-lg btn1">
                Learn CSS
              </button>
            </div>
            <div style={{ marginBottom: "60px" }}>
              <button type="button" className="btn btn-lg btn3">
                CSS Reference
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: "#282A35" }}>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <h1 className="box29 mb-5">JavaScript</h1>
            <h5>
              <strong style={{ color: "white" }}>
                The language for building web pages
              </strong>
            </h5>
            <div className="mb-4 mt-4">
              <button type="button" className="btn btn-lg btn1">
                Learn JavaScript
              </button>
            </div>
            <div style={{ marginBottom: "60px" }}>
              <button
                type="button"
                className="btn btn-lg btn3"
                style={{ paddingRight: "2px" }}
              >
                JavaScript Reference
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col box6">
          <div
            className="col-md-5 mb-3 mt-5"
            style={{
              backgroundColor: "#FFC0C7",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <h1 className="mt-5" style={{ fontSize: "60px" }}>
              PHP
            </h1>
            <h6 className="mb-5">A web server programming language</h6>
            <div>
              <button
                type="button"
                className="btn btn-success mb-5"
                style={{ borderRadius: "15px" }}
              >
                Learn PHP
              </button>
            </div>
          </div>
          <div
            className="col-md-5 mb-3 mt-5"
            style={{
              backgroundColor: "#FFF4A3",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <h1 className="mt-5" style={{ fontSize: "60px" }}>
              jQuery
            </h1>
            <h6 className="mb-5">A JS library for developing web pages</h6>
            <div>
              <button
                type="button"
                className="btn btn-success mb-5"
                style={{ borderRadius: "15px" }}
              >
                Learn PHP
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col box6">
          <div
            className="col-md-5 mb-3 mt-3"
            style={{
              backgroundColor: "#F3ECEA",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <h1 className="mt-5" style={{ fontSize: "60px" }}>
              Java
            </h1>
            <h6 className="mb-5">A programming language</h6>
            <div>
              <button
                type="button"
                className="btn btn-success mb-5"
                style={{ borderRadius: "15px" }}
              >
                Learn PHP
              </button>
            </div>
          </div>
          <div
            className="col-md-5 mb-3 mt-3"
            style={{
              backgroundColor: "#D9EEE1",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <h1 className="mt-5" style={{ fontSize: "60px" }}>
              C++
            </h1>
            <h6 className="mb-5">A programming language</h6>
            <div>
              <button
                type="button"
                className="btn btn-success mb-5"
                style={{ borderRadius: "15px" }}
              >
                Learn PHP
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col box6">
          <div
            className="col-md-5 mb-5 mt-3"
            style={{
              backgroundColor: "#96D4D4",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <h1 className="mt-5" style={{ fontSize: "60px" }}>
              W3.CSS
            </h1>
            <h6 className="mb-5">
              A CSS framework for faster and better responsive web pages
            </h6>
            <div>
              <button
                type="button"
                className="btn btn-success mb-5"
                style={{ borderRadius: "15px" }}
              >
                Learn PHP
              </button>
            </div>
          </div>
          <div
            className="col-md-5 mb-5 mt-3"
            style={{
              backgroundColor: "#E7E9EB",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <h1 className="mt-5" style={{ fontSize: "60px" }}>
              Boostrap
            </h1>
            <h6 className="mb-5">
              A CSS framework for designing better web pages
            </h6>
            <div>
              <button
                type="button"
                className="btn btn-success mb-5"
                style={{ borderRadius: "15px" }}
              >
                Learn PHP
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: "#2F313C" }}>
          <div className="col mt-5" style={{ textAlign: "center" }}>
            <h1 className="box24">W3Schools Spaces</h1>
            <h5 style={{ color: "white" }} className="mt-5">
              Build your own website with W3schools Spaces
            </h5>
            <div>
              <button type="button" className="btn mb-4 mt-4 box25">
                <span className="box26">Get Started for Free</span>
              </button>
            </div>
            <img
              className="img-fluid"
              src={Img4}
              alt="Please reload page"
            ></img>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: "#F3ECEA" }}>
          <div className="col mt-5" style={{ textAlign: "center" }}>
            <h1 className="box27">
              <strong>Color Picker</strong>
            </h1>
            <h5 className="mt-3">W3schools' famous color picker</h5>
            <Link to="https://www.w3schools.com/colors/colors_picker.asp">
              <img
                className="img-fluid"
                src={Img5}
                alt="Please Reload the page"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: "#96D4D4" }}>
          <div className="col" style={{ textAlign: "center" }}>
            <img
              className="img-fluid"
              src={Img6}
              alt="Please Reload the Page"
            ></img>
            <div>
              <Link
                to="https://www.w3schools.com/codegame/index.html"
                className="btn mb-5"
                style={{
                  borderRadius: "25px",
                  display: "inline-block",
                  width: "200px",
                  backgroundColor: "#000000",
                  color: "white",
                }}
              >
                <strong>Play Game</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ backgroundColor: "#282A35" }}>
          <div className="col mt-5">
            <div className="col mb-5">
              <h1 className="box7">KickStart your carrer</h1>
            </div>
            <div className="col mb-5">
              <h3 className="box8">Get certified by completing a course</h3>
            </div>
            <div>
              <button type="button" className="btn mb-5 mt-4 box9">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col box21">
          <h1 style={{ fontSize: "40px" }}>
            <strong>How to Section</strong>
          </h1>
          <h5 className="mt-4">Code snippets for HTML,CSS and JavaScript</h5>
          <h6 className="mt-4 mb-4">For example,how to create a slideshow</h6>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Img7}
                  className="d-inline-block box42"
                  height="350px"
                  width="800px"
                  alt="Please reload the Page"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Img8}
                  className="d-inline-block box42"
                  height="350px"
                  width="800px"
                  alt="Please reload the Page"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Img9}
                  className="d-inline-block box42"
                  height="350px"
                  width="800px"
                  alt="Please reload the Page"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LandingPage;
