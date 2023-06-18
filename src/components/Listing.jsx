import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Listing = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getAllPokemons();
    window.addEventListener("scroll", handleScroll);
  }, [offset]);

  const getAllPokemons = async () => {
    setLoading(true);
    const res = await axios(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
    );
    const data = await res.data;
    const newPokemons = [];

    for (const result of data.results) {
      const res = await axios(
        `https://pokeapi.co/api/v2/pokemon/${result.name}`
      );
      const data = await res.data;
      newPokemons.push(data);
    }

    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setOffset(offset + 10);
    }
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-10 h-screen mt-4">
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {loading && (
        <div className="text-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default Listing;
