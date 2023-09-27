import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PlayBox.css";

export const PlayBox = () => {
  // const [currentClass, setCurrentClass] = useState("");
  const [isXNext, setIsNext] = useState(true);

  function handleClick(event) {
    // Checking if the box is already marked, if it is then don't change it
    // setCurrentClass(
    //   currentClass ? currentClass : currentClass === "x" ? "o" : "x"
    // );
    const clonedElement = event.target.cloneNode(true);
    console.log(clonedElement);
    if (isXNext) {
      clonedElement.innerHtml = "X";
      clonedElement.className = "x";
    } else {
      clonedElement.innerHTML = "O";
      clonedElement.className = "o";
    }

    // toggle for next click
    setIsNext(!isXNext);

    //replace clicked squaare with updated element
    event.target.replaceWith(clonedElement);
  }

  return (
    <>
      <motion.div
        className="main-box"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.6, 0.2, 1.01],
        }}
      >
        <div className="board">
          <div className="square top left" onClick={handleClick}>
            <div className=""></div>
          </div>
          <div className="square top" onClick={handleClick}>
            <div className=""></div>
          </div>
          <div className="square top right" onClick={handleClick}>
            <div className=""></div>
          </div>
          <div className="square left" onClick={handleClick}>
            <div className=""></div>
          </div>
          <div className="square" onClick={handleClick}>
            <div className=""></div>
          </div>
          <div className="square right" onClick={handleClick}>
            <div className=""></div>
          </div>
          <div className="square bottom left" onClick={handleClick}>
            <div className=""></div>
          </div>
          <div className="square bottom" onClick={handleClick}>
            <div className=""></div>
          </div>
          <div className="square bottom right" onClick={handleClick}>
            <div className=""></div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
