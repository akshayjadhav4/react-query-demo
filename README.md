# UseQuery Hook

**_fetchPlanets.js_**

```
export const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

```

**_App.js_**

```

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <!-- Components -->
    </QueryClientProvider>
  );
}

export default App;


```

**_Planet.js_**

```
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


```

# Query Variables

**_Planet.js_**

```
const { data, status } = useQuery(["planets", pageNumber], (context) =>
    fetchPlanets(context.queryKey[1])
  );
```

**_fetchPlanets.js_**

```
export const fetchPlanets = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

```

# Pagination

**_People.js_**

```
 const { data, status, isPreviousData, isFetching } = useQuery(
    ["people", pageNumber],
    (context) => fetchPeople(context.queryKey[1]),
    { keepPreviousData: true, staleTime: 5000 }
  );
```

**_Pagination navigation buttons logic_**

```

<button
  onClick={() => setPageNumber((old) => Math.max(old - 1, 0))}
  disabled={pageNumber === 1}
>
  Previous Page
</button>

{<div className="mx-1 text-white inline">{pageNumber}</div>}{" "}

<button

  onClick={() => setPageNumber((old) => (data?.next ? old + 1 : old))}
  disabled={isPreviousData || !data?.next}
 >
  Next Page
</button>


```
