import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function RegisterForm() {
  return (
    <div className="bg-dark-turqoise flex items-center justify-center h-screen overflow-hidden">
      <form className="bg-silver flex flex-col items-center justify-center w-auto h-auto rounded-md pl-10 pr-10">
        <h1 className="text-brown text-3xl font-bold pt-10">CAKELAND</h1>
        <h2 className="text-brown  text-2xl font-bold pt-5">Register</h2>
        <div className="flex mt-10">
          <input
            type="text"
            placeholder="Username"
            className="p-1 rounded-lg"
          />
        </div>
        <div className="flex mt-10">
          <input
            type="password"
            placeholder="Password"
            className="p-1 rounded-lg"
          />
        </div>
        <Link to="/">
          <Button text={"Register"} />
        </Link>
      </form>
    </div>
  );
}
