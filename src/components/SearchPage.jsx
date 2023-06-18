import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const SearchPage = () => {
  const [search, setSearch] = useState("pikachu");
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    setSearch(name);
    setLoading(true);
  };

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => {
        setError("");
        setPokemon(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [search]);
  
  return (
    <div className="my-4">
      <h1 className="text-center text-5xl font-medium">Pokemon</h1>
      <form onSubmit={handleSearch}>
        <div className="join flex justify-center items-center mt-5">
          <div>
            <div className="w-full">
              <input
                name="name"
                className="input input-bordered join-item w-96 focus:border-gray-400 focus:outline-0"
                placeholder="Search by name (pikachu)"
              />
            </div>
          </div>
          <div className="indicator">
            <button type="submit" className="btn join-item">
              Search
            </button>
          </div>
        </div>
      </form>
      {loading && (
        <div className="text-center">
          <span className="loading loading-bars loading-lg mt-14"></span>
        </div>
      )}
      {pokemon ? (
        <div className="mt-5">
          <Card pokemon={pokemon} />
        </div>
      ) : (
        ""
      )}
      {error ? (
        <div className="text-center mt-10">
          <p className="text-error text-2xl">{error}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchPage;
