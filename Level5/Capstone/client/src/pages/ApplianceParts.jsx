import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AppliancePartsContext from "../context/AppliancePartsContext";
import "../pages/pageCssFiles/appliance-parts.css";

export default function ApplianceParts() {
  const { ApplianceParts } = useContext(AppliancePartsContext);

  //if (!ApplianceParts) return <div>Loading...</div>;

  return (
    <div className="appliance-parts-row">
      <div className="appliance-search-container">
        <h1>Appliance Parts</h1>
        <div className="appliance-parts-grid">
          {ApplianceParts.slice(0, 24).map(appliancePart => (
            <div key={appliancePart._id} className="appliance-parts-card">
              <img src={appliancePart.imageUrl} alt={appliancePart.title} />
              <h2>{appliancePart.title}</h2>
              <p className="description">{appliancePart.description}</p>
              <p className="price">Price: ${appliancePart.price}</p>
              <p>Likes: {appliancePart.likes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
