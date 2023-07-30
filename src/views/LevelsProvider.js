import React, { createContext, useState } from "react";

export const LevelsConext = createContext();

const LevelsProvider = ({ children }) => {
  const [passLevel, setPassLevel] = useState([{
    level01: false,
    level02: false,
    level03: false,
    level04: false,
    level05: false,
  }]);

  const updateLevels = (level, Boolean) => {
    
  }

  return <LevelsConext.Provider value={passLevel}>{children}</LevelsConext.Provider>;
};

export default LevelsProvider;
