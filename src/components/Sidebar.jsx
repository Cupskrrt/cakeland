import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const activeLink = "mb-7 bg-turqoise w-24"
    const normalLink = "mb-7 hover:border-turqoise hover:border-2 w-24"

  return (
    <div className="bg-dark-turqoise min-h-[92vh] w-24 text-silver">
      <nav className="flex flex-col items-center justify-start mt-2">
        <NavLink to="/cake" className={({ isActive }) => isActive ? activeLink : normalLink}>
          Cake
        </NavLink>
        <NavLink to="/history"className={({ isActive }) => isActive ? activeLink : normalLink}>History</NavLink>
        <NavLink to="/profile"className={({ isActive }) => isActive ? activeLink : normalLink}>Profile</NavLink>
        <NavLink to="/" className="mt-20 hover:border-turqoise hover:border-2 w-24">Logout</NavLink>
      </nav>
    </div>
  );
}
