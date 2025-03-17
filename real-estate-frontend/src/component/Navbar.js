import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">Prop-Keys</Link>
      <div>
        <Link to="/" className="mx-2">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
