import React from "react";

function PeopleCard({ people }) {
  return (
    <div className="py-4 px-8 border-gray-400 bg-gray-900 text-white my-2 rounded-lg">
      <h3 className="text-xl font-bold text-yellow-300">{people.name}</h3>
      <p className="text-lg">Birth Year: {people.birth_year}</p>
      <p className="text-lg">Gender: {people.gender}</p>
      <p className="text-lg">Eye Color: {people.eye_color}</p>
    </div>
  );
}

export default PeopleCard;
