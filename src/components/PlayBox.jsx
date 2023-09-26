import React from "react";
import "./PlayBox.css";

export const PlayBox = () => {
  return (
    <>
      <div className="main-box">
        <div className="board">
          <div className="square top left">
            <div className="x">X</div>
          </div>
          <div className="square top">
          <div className="o">O</div>
          </div>
          <div className="square top right">
            <div className=""></div>
          </div>
          <div className="square left">
          <div className="x">X</div>
          </div>
          <div className="square">
          <div className="o">O</div>
          </div>
          <div className="square right">
          <div className="x">X</div>
          </div>
          <div className="square bottom left">
          <div className="o">O</div>
          </div>
          <div className="square bottom">
          <div className="x">X</div>
          </div>
          <div className="square bottom right">
          <div className="o">O</div>
          </div>
        </div>
      </div>
    </>
  );
};
