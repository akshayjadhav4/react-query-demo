import React from "react";

function Navbar({ setPage }) {
  return (
    <nav>
      <button
        className="my-0 mx-3.5 border-2  border-gray-400 p-3 cursor-pointer text-gray-400 bg-yellow-300 rounded-3xl hover:text-white hover:border-white focus:outline-none"
        onClick={() => setPage("people")}
      >
        People
      </button>
      <button
        className="my-0 mx-3.5 border-2  border-gray-400 p-3 cursor-pointer text-gray-400 bg-yellow-300 rounded-3xl hover:text-white hover:border-white focus:outline-none"
        onClick={() => setPage("planets")}
      >
        Planets
      </button>
    </nav>
  );
}

export default Navbar;
