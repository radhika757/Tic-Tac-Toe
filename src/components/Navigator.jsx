import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navigator.css";
import robot from "../assets/robot.png";
import person from "../assets/person.png";

export const Navigator = () => {
  const [playerSelected, setPlayerSelected] = useState(false);
  const [computerSelected, setComputerSelected] = useState(false);

  function handlePlayerClick() {
    setPlayerSelected(true);
    setComputerSelected(false);
  }

  function handleComputerHandler() {
    setComputerSelected(true);
    setPlayerSelected(false);
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
    </>
  );
};
