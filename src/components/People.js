import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchPeople } from "../api/fetchPeople";
import PeopleCard from "./PeopleCard";
function People() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, status, isPreviousData, isFetching } = useQuery(
    ["people", pageNumber],
    (context) => fetchPeople(context.queryKey[1]),
    { keepPreviousData: true, staleTime: 5000 }
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

      {status === "success" && (
        <>
          <div>
            {data.results.map((people) => (
              <PeopleCard key={people.name} people={people} />
            ))}
          </div>
          {isFetching && <div className="m-1 text-white">Loading...</div>}
          <button
            className="mx-1 my-1 border-2  border-gray-400 p-3 cursor-pointer text-gray-600 bg-yellow-300 rounded-lg hover:text-white hover:border-white focus:outline-none disabled:cursor-not-allowed"
            onClick={() => setPageNumber((old) => Math.max(old - 1, 0))}
            disabled={pageNumber === 1}
          >
            Previous Page
          </button>
          {<div className="mx-1 text-white inline">{pageNumber}</div>}{" "}
          <button
            className="mx-1 my-1 border-2  border-gray-400 p-3 cursor-pointer text-gray-600 bg-yellow-300 rounded-lg hover:text-white hover:border-white focus:outline-none  disabled:cursor-not-allowed"
            onClick={() => {
              setPageNumber((old) => (data?.next ? old + 1 : old));
            }}
            disabled={isPreviousData || !data?.next}
          >
            Next Page
          </button>
        </>
      )}
    </div>
  );
}

export default People;
