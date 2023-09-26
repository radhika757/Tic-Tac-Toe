import React from "react";
import { motion } from "framer-motion";
import "./PlayBox.css";

export const PlayBox = () => {
  return (
    <>
      <motion.div
        className="main-box"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0, 0.6, 0.2, 1.01],
        }}
      >
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
      </motion.div>
    </>
  );
};
