import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchPlanets } from "../api/fetchPlanets";
import PlanetCard from "./PlanetCard";
function Planet() {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, status } = useQuery(["planets", pageNumber], (context) =>
    fetchPlanets(context.queryKey[1])
  );

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

      <button
        className="mx-1 border-2  border-gray-400 p-3 cursor-pointer text-gray-600 bg-yellow-300 rounded-lg hover:text-white hover:border-white focus:outline-none"
        onClick={() => setPageNumber(1)}
      >
        Page 1
      </button>
      <button
        className="mx-1 border-2  border-gray-400 p-3 cursor-pointer text-gray-600 bg-yellow-300 rounded-lg hover:text-white hover:border-white focus:outline-none"
        onClick={() => setPageNumber(2)}
      >
        Page 2
      </button>
      <button
        className="mx-1 border-2  border-gray-400 p-3 cursor-pointer text-gray-600 bg-yellow-300 rounded-lg hover:text-white hover:border-white focus:outline-none"
        onClick={() => setPageNumber(3)}
      >
        Page 3
      </button>
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
