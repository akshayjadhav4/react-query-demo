import React from "react";
import { useQuery } from "react-query";
import { fetchPeople } from "../api/fetchPeople";
import PeopleCard from "./PeopleCard";
function People() {
  const { data, status } = useQuery("people", fetchPeople);

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
          {data.results.map((people) => (
            <PeopleCard key={people.name} people={people} />
          ))}
        </div>
      )}
    </div>
  );
}

export default People;
