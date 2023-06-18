import React, { useEffect, useState } from "react";
import { getItems, removeItem } from "../utilities/fakeDB";

const Bookmark = () => {
  const [stored, setStored] = useState(getItems());

  useEffect(() => {
    setStored(getItems());
  }, []);

  const handleDeleteBookmark = (item) => {
    removeItem(item);
    setStored(getItems());
  };

  return (
    <div className="grid grid-cols-5 gap-10 mt-5">
      {stored?.map((pk) => (
        <div key={pk.id} className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="h-52" src={pk.image} alt="Pokemon" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl capitalize">Name: {pk?.name}</h2>
            <p>Weight: {pk?.weight}</p>
            <p>Height: {pk?.height}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDeleteBookmark(pk)}
                className="btn btn-primary normal-case text-base text-white btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookmark;
