import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import SearchPage from "./components/SearchPage";
import Listing from "./components/Listing";
import PokemonDetails from "./components/PokemonDetails";
import Bookmark from "./components/Bookmark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
      },
      {
        path: "listing",
        element: <Listing />,
      },
      {
        path: "pokemonDetails/:name",
        element: <PokemonDetails />,
        loader: ({ params }) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`),
      },
      {
        path: 'bookmark',
        element: <Bookmark />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
