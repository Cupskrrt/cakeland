import React from "react";

function Button({text}) {
    return(
        <div className="mt-10 pb-10">
            <button className="bg-turqoise text-silver font-bold rounded-md px-6 py-2 hover:bg-dark-turqoise">{text}</button>
        </div>
    )
}

export default Button