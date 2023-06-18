import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { getItems, removeItem, saveItem } from "../utilities/fakeDB";
import { toast } from "react-hot-toast";

const PokemonDetails = () => {
  const pokemon = useLoaderData();
  const [stored, setStored] = useState(getItems())

  useEffect(() => {
    setStored(getItems())
  }, [])

  const handleBookmark = (pokemon) => {
    const data = {
      id: pokemon.id,
      name: pokemon.name,
      weight: pokemon.weight,
      height: pokemon.height,
      image: pokemon?.sprites?.other?.dream_world?.front_default,
    };
    saveItem(data);
    setStored(getItems())
    toast.success("Bookmark Successful");
  };
  const handleRemoveBookmark = (pokemon) => {
    removeItem(pokemon);
    setStored(getItems())
    toast.success("Bookmark Removed Successfully");
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-actions justify-end">
        {stored.find((pk) => pk.id == pokemon.id) ? (
          <button
            onClick={() => handleRemoveBookmark(pokemon)}
            className="btn btn-ghost"
          >
            <FaBookmark size={25} />
          </button>
        ) : (
          <button
            onClick={() => handleBookmark(pokemon)}
            className="btn btn-ghost"
          >
            <FaRegBookmark size={25} />
          </button>
        )}
      </div>
      <figure>
        <img
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt="Pokemon"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl capitalize">
          Name: {pokemon?.name}
        </h2>
        <p>Species: {pokemon?.species?.name}</p>
        <p>Type: {pokemon?.types[0]?.type.name}</p>
        <p>Hp: {pokemon?.stats[0]?.base_stat}</p>
        <progress
          className="progress progress-primary w-56 h-3"
          value={pokemon?.stats[0]?.base_stat}
          max="100"
        ></progress>
        <p>Attack: {pokemon?.stats[1]?.base_stat}</p>
        <progress
          className="progress progress-primary w-56 h-3"
          value={pokemon?.stats[1]?.base_stat}
          max="100"
        >
          {pokemon?.stats[2]?.base_stat}
        </progress>
        <p>Defense: {pokemon?.stats[2]?.base_stat}</p>
        <progress
          className="progress progress-primary w-56 h-3"
          value={pokemon?.stats[2]?.base_stat}
          max="100"
        ></progress>
        <p>Speed: {pokemon?.stats[5]?.base_stat}</p>
        <progress
          className="progress progress-primary w-56 h-3"
          value={pokemon?.stats[5]?.base_stat}
          max="100"
        ></progress>

        <p>Weight: {pokemon?.weight}</p>
        <p>Height: {pokemon?.height}</p>
        <p>
          Abilities:{" "}
          {pokemon?.abilities?.map((ab) => (
            <span key={ab.ability.name} className="mr-2">
              {ab.ability.name},
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetails;
