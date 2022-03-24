import React from "react";

const HeaderButtons = () => {
    return (
        <div className="text-white capitalize text-xl font-normal max-w-max m-0 leading-10">
            <button className="hover:text-red-300 hover:underline">
                <a href="login">Login</a>
            </button>
            <button>
                <div className="bg-red-900 px-4 my-2 mx-2.5 rounded hover:text-red-300 hover:underline">
                    <a href="users/create">Register</a>
                </div>
            </button>
        </div>
    );
}

export default HeaderButtons;