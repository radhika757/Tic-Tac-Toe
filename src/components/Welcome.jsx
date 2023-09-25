import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Welcome.css";
export const Welcome = () => {
  return (
    <>
      {/* <div className="box"> */}
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        
        }}
      >
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
      </motion.div>
      {/* </div> */}
    </>
  );
};
