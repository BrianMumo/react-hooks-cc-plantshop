import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleToggleSoldOut = () => setIsSoldOut((prev) => !prev);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p> {/* Removed "$" for test compatibility */}
      <button
        onClick={handleToggleSoldOut}
        className={isSoldOut ? "" : "primary"}
      >
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
