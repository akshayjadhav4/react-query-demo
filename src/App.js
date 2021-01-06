import React, { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planet from "./components/Planet";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <div className="app my-0 mx-auto w-11/12 text-center">
      <h1 className="text-yellow-300 text-7xl tracking-wide">Star Wars</h1>
      <Navbar setPage={setPage} />
      <div className="content text-left">
        {page === "planets" ? <Planet /> : <People />}
      </div>
    </div>
  );
}

export default App;
