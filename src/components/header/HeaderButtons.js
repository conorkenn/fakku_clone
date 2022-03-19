import React from "react";

const HeaderButtons = () => {
    return (
        <React.Fragment>
            <button className="text-white capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:text-red-300 hover:underline">
                Login
            </button>
            <button className="text-white capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:text-red-300 hover:underline">
                <div className="bg-red-900 px-4 my-2 rounded">Register</div>
            </button>
        </React.Fragment>
    );
}

export default HeaderButtons;