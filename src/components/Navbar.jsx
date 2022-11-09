import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-dark-turqoise text-silver min-h-[8vh] flex items-center justify-start ">
      <h1 className="font-bold">CAKELAND</h1>
      <NavLink to="/manage" className="ml-9">Manage Menu</NavLink>
    </div>
  );
}
