import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-52"
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt="Pokemon"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl capitalize">
          Name: {pokemon?.name}
        </h2>
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
        <div className="card-actions justify-end">
          <Link to={`/pokemonDetails/${pokemon?.name}`}>
            <button className="btn btn-primary normal-case text-base text-white btn-sm">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
