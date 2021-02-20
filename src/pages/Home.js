import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { imagesData } from "../data";
import Header from "../components/Header";

const Grid1 = ({ data: { src, desc, title, id } }) => {
  return (
    <div className="cover">
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="backgroundFix background"
      ></div>
      <Link to={`/image/${id}`} className="overlay centered">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
};
const Grid2 = ({ data: { src, desc, title, id } }) => {
  return (
    <div className="cover">
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="backgroundFix background"
      ></div>
      <Link to={`/image/${id}`} className="overlay centered">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
};
export const Home = () => {
  return (
    <>
    <Header />
    <div className="homeWrapper container">
      <div className="lightImage">
        <Grid1 data={imagesData[0]} />
        <div className="coverRight">
          <Grid2 data={imagesData[1]} />
          <Grid2 data={imagesData[2]} />
        </div>
      </div>
    </div>
    </>
  );
};