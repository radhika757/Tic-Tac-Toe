import React from "react";
import "./Home.css";
import { PlayBox } from "./PlayBox";
import { Navigator } from "./Navigator";

export const Home = () => {
  return (
    <>
      <div className="home">
        <PlayBox />
        <Navigator/>
      </div>
    </>
  );
};
