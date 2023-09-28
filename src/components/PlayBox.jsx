import React, { useState } from "react";
import { motion } from "framer-motion";
import "./PlayBox.css";

export const PlayBox = () => {
  // const [currentClass, setCurrentClass] = useState("");
  const [isXNext, setIsNext] = useState(true);

  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  function checkWinner(symbol) {
    // for rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === symbol &&
        board[i][1] === symbol &&
        board[i][2] === symbol
      ) {
        return true;
      }
    }
  }

  function handleClick(event) {
    let targetDiv = event.target;
    let innerDiv = targetDiv.querySelector("div");

    if (isXNext) {
      innerDiv.innerHTML = "X";
      innerDiv.className = "x";
      updateBoard(innerDiv, "X");
    } else {
      innerDiv.innerHTML = "O";
      innerDiv.className = "o";
      updateBoard(innerDiv, "O");
    }
    //replace clicked squaare with updated element
    innerDiv.replaceWith(innerDiv);

    if (checkWinner("X")) {
      alert("Player X wins!");
    } else if (checkWinner("O")) {
      alert("Player O wins!");
    } else {
      // toggle for next click
      setIsNext(!isXNext);
    }
  }
  function updateBoard(innerDiv, symbol) {
    // console.log(symbol,innerDiv);
    console.log(innerDiv.getAttribute("data-row"));
    const row = parseInt(innerDiv.getAttribute("data-row"));
    const col = parseInt(innerDiv.getAttribute("data-col"));
    console.log(row, col);
    board[row][col] = symbol;
    console.log(board);
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
            {/* <div className=""></div> */}
            <motion.div
              className=""
              data-row="0"
              data-col="0"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square top" onClick={handleClick}>
            <motion.div
              className=""
              data-row="0"
              data-col="1"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square top right" onClick={handleClick}>
            <motion.div
              className=""
              data-row="0"
              data-col="1"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square left" onClick={handleClick}>
            <motion.div
              className=""
              data-row="0"
              data-col="2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square" onClick={handleClick}>
            <motion.div
              className=""
              data-row="1"
              data-col="0"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square right" onClick={handleClick}>
            <motion.div
              className=""
              data-row="1"
              data-col="1"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square bottom left" onClick={handleClick}>
            <motion.div
              className=""
              data-row="1"
              data-col="2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square bottom" onClick={handleClick}>
            <motion.div
              className=""
              data-row="2"
              data-col="0"
              whileHover={{ scale: 0.5 }}
              whileTap={{ scale: 0.7 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square bottom right" onClick={handleClick}>
            <motion.div
              className=""
              data-row="2"
              data-col="1"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
