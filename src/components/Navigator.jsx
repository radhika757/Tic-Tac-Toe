import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navigator.css";
import robot from "../assets/robot.png";
import person from "../assets/person.png";

export const Navigator = () => {
  const [playerSelected, setPlayerSelected] = useState(false);
  const [computerSelected, setComputerSelected] = useState(false);
  const [showPlayersBox, setShowPlayersBox] = useState(false);
  const [welcomeMsge, setWelcomeMsge] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  // console.log(playerOne, playerTwo);

  function handlePlayerClick() {
    setPlayerSelected(true);
    setComputerSelected(false);
    setShowPlayersBox(true);
  }

  function handleComputerHandler() {
    setComputerSelected(true);
    setPlayerSelected(false);
    setShowPlayersBox(false);
  }

  function handlePlayerNames() {
    localStorage.clear();
    let players = [playerOne, playerTwo];
    localStorage.setItem("players", players);
    setShowPlayersBox(false);
    setWelcomeMsge(true);
  }
  return (
    <>
    

      <motion.div
        className="nav-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3,
          delay: 0.5,
          ease: [0, 0.6, 0.2, 1.01],
        }}
      >
        <div>
          <div
            className={playerSelected ? "selecOpt" : "options"}
            onClick={handlePlayerClick}
          >
            <img src={person} alt="player" />
          </div>
          <div
            className={computerSelected ? "selecOpt comp" : "options comp"}
            onClick={handleComputerHandler}
          >
            <img src={robot} alt="computer" />
          </div>
        </div>
      </motion.div>
      {showPlayersBox && (
        <div className="users-box">
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            Players Info
          </div>
          <label htmlFor="Player 1">Player 1</label>
          <input
            type="text"
            name="player1"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setPlayerOne(e.target.value)}
          />
          <label htmlFor="Player 2">Player 2</label>
          <input
            type="text"
            name="player2"
            onChange={(e) => setPlayerTwo(e.target.value)}
          />
          <div className="btn">
            <button onClick={handlePlayerNames}>Lets Go!</button>
          </div>
        </div>
      )}

      
    </>
  );
};
