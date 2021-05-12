import React, { useState } from "react";
export const BlobContext = React.createContext();

export const BlobContextProvider = ({ children }) => {
  const [contactTextSource, setContactTextSource] = useState(false);
  return (
    <BlobContext.Provider value={{ contactTextSource, setContactTextSource }}>
      {children}
    </BlobContext.Provider>
  );
};
