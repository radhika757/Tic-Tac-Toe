import React, { useState } from "react";

import { motion } from "framer-motion";
import "./Navigator.css";
import robot from "../assets/robot.png";
import person from "../assets/person.png";
import retry from "../assets/try.png";

export const Navigator = () => {
  const [playerSelected, setPlayerSelected] = useState(false);
  const [computerSelected, setComputerSelected] = useState(false);

  function handlePlayerClick() {
    setPlayerSelected(true);
    setComputerSelected(false);
    setShowPlayersBox(true);
    // window.location.hash = 'players';
  }

  function handleComputerHandler() {
    setComputerSelected(true);
    setPlayerSelected(false);
    setShowPlayersBox(false);
  }

  function handleRefresh() {
    window.location.reload();
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
          <div className="options" onClick={handleRefresh}>
            <img
              src={retry}
              alt="retry"
              style={{ width: "30px", marginLeft: "4px" }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
