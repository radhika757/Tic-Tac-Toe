import React from "react";
import "./Welcome.css";
export const Welcome = () => {
  return (
    <>
      <div className="box">
        <div className="content">
          <h3>Welcome to Tic-Tac-Toe !</h3>

          <div className="choice">
            <h4>Select Game Type -</h4>
            <div className="inputs">
              <input type="radio" name="choice" />
              <label htmlFor="computer">vs Computer</label>
            </div>
            <div>
              <input type="radio" name="choice" />
              <label htmlFor="players">2 Players</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
