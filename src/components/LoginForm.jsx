import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="bg-dark-turqoise flex items-center justify-center h-screen overflow-hidden">
      <form className="bg-silver flex flex-col items-center justify-center w-auto h-auto rounded-md pl-10 pr-10">
        <h1 className="text-brown text-3xl font-bold pt-10">CAKELAND</h1>
        <h2 className="text-brown  text-2xl font-bold pt-5">Login</h2>
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
        <Link to="/cake">
          <Button text={"Login"} />
        </Link>
        <p className="pb-10">Dont't have an account? <Link className="text-turqoise font-bold italic hover:text-dark-turqoise" to='/register'>Register Now</Link></p>
      </form>
    </div>
  );
}

export default LoginForm;
