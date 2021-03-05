import React, { useState } from "react";
export const BlobContext = React.createContext();

export const BlobContextProvider = ({ children }) => {
  const [contact, setContact] = useState(false);
  const [contactTextSource, setContactTextSource] = useState(false);
  return (
    <BlobContext.Provider
      value={{ contact, setContact, contactTextSource, setContactTextSource }}
    >
      {children}
    </BlobContext.Provider>
  );
};
