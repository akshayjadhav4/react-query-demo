export const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};
