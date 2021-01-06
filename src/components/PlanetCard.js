import React from "react";

function PlanetCard({ planet }) {
  return (
    <div className="py-4 px-8 border-gray-400 bg-gray-900 text-white my-2 rounded-lg">
      <h3 className="text-xl font-bold text-yellow-300">{planet.name}</h3>
      <p className="text-lg">Population: {planet.population}</p>
      <p className="text-lg">Terrain: {planet.terrain}</p>
      <p className="text-lg">Climate: {planet.climate}</p>
    </div>
  );
}

export default PlanetCard;
