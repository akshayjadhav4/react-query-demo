import React, { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planet from "./components/Planet";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  const [page, setPage] = useState("planets");
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app my-0 mx-auto w-11/12 text-center">
        <h1 className="text-yellow-300 text-7xl tracking-wide">Star Wars</h1>
        <Navbar setPage={setPage} />
        <div className="content text-left">
          {page === "planets" ? <Planet /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
