import React from "react";
import { useQuery } from "react-query";
import { fetchPlanets } from "../api/fetchPlanets";
import PlanetCard from "./PlanetCard";
function Planet() {
  const { data, status } = useQuery("planets", fetchPlanets);

  return (
    <div>
      {status === "loading" && (
        <div className="text-green-500 font-semibold text-center m-1">
          Fetching data
        </div>
      )}

      {status === "error" && (
        <div className="text-red-500 font-semibold text-center m-1">
          Error while fetching data
        </div>
      )}

      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <PlanetCard planet={planet} key={planet.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Planet;
