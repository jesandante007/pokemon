import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Pokemon</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>Search</Link>
          </li>
          <li>
            <Link to='/listing'>Listing</Link>
          </li>
          <li>
            <Link to='/bookmark'>Bookmark</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
