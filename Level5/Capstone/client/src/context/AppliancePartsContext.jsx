import React, { createContext, useState, useEffect } from "react";

const AppliancePartsContext = createContext();

export const ApplianceManufacturer = ({ children }) => {
  const [ApplianceParts, setApplianceParts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/applianceParts')
      .then(response => response.json())
      .then(data => setApplianceParts(data))
      .catch(error => console.error("Error fetching appliance part: ", error));
  }, []);

  return (
    <AppliancePartsContext.Provider value={{ ApplianceParts, setApplianceParts }}>
      {children}
    </AppliancePartsContext.Provider>
  );
};

export default AppliancePartsContext;

