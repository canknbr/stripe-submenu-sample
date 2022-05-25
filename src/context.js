import React, { useState, useContext } from 'react';
import sublinks from './data';

const SubmenuContext = React.createContext();

const SubmenuProvider = ({ children }) => {
  return (
    <SubmenuContext.Provider value={'hello'}>
      {children}
    </SubmenuContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SubmenuContext);
};
export default SubmenuProvider;
