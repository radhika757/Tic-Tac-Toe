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
        console.log('WinneR');
        return true;
      }
    }

    //columns
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] === symbol &&
        board[1][j] === symbol &&
        board[2][j] === symbol
      ) {
        console.log('WinneC');
        return true;
      }
    }

    //diagonals
    if (
      (board[0][0] === symbol &&
        board[1][1] === symbol &&
        board[2][2] === symbol) ||
      (board[0][2] === symbol &&
        board[1][1] === symbol &&
        board[2][0] === symbol)
    ) {
      console.log('WinneC');
      return true;
    }
    console.log('Nop Winner');
    return false; // No winner yet
  }

  function handleClick(event) {
    // console.log(board);
    let targetDiv = event.target;
    let innerDiv = targetDiv.querySelector("div");

    if (isXNext) {
      innerDiv.innerHTML = "X";
      innerDiv.className = "x";
      // console.log(innerDiv);
      updateBoard(innerDiv, "X");
    } else {
      innerDiv.innerHTML = "O";
      innerDiv.className = "o";
      updateBoard(innerDiv, "O");
    }
    //replace clicked squaare with updated element
    // innerDiv.replaceWith(innerDiv);

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
    const row = parseInt(innerDiv.getAttribute("data-row"));
    const col = parseInt(innerDiv.getAttribute("data-col"));
  
    if (board[row][col] === "") {
      board[row][col] = symbol; // Assign the symbol directly
    } else {
      console.log("Already occupied");
    }
  
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
              data-col="2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </div>
          <div className="square left" onClick={handleClick}>
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
          <div className="square" onClick={handleClick}>
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
          <div className="square right" onClick={handleClick}>
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
          <div className="square bottom left" onClick={handleClick}>
            <motion.div
              className=""
              data-row="2"
              data-col="0"
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
              data-col="1"
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
              data-col="2"
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
