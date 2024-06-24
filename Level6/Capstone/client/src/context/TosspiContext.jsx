import React, { createContext, useState, useEffect } from "react";

const TosspiContext = createContext();

export const TosspiWebsite = ({ children }) => {
  const [applianceParts, setApplianceParts] = useState([]);

  useEffect(() => {
    fetch('/api/appliance')
      .then(response => response.json())
      .then(data => setApplianceParts(data))
      .catch(error => console.error("Error fetching appliance part: ", error));
  }, []);

  return (
    <TosspiContext.Provider value={{ applianceParts, setApplianceParts }}>
      {children}
    </TosspiContext.Provider>
  );
};

export default TosspiContext;

