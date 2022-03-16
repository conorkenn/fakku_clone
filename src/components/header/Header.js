import React from "react";
import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";


const Header = () =>{
    return(
        <div className="bg-red-700 shadow-lg flex pr-5 pl-5 justify-center">
            <div className="flex flex-row justify-center h-12 w-18">
                <HeaderLogo />
                <HeaderLinks />
                <div className="flex flex-row justify-center ml-auto h-full">
                    Account stuff
                </div>
            </div>
        </div>
    );
}

export default Header;