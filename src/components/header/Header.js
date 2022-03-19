import React from "react";
import HeaderButtons from "./HeaderButtons";
import HeaderIcons from "./HeaderIcons";
import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";

const Header = () =>{
    return(
        <div className="sticky top-0 z-50">
            <div className="bg-red-700 shadow-lg flex pr-5 pl-5 ">
                <div className="flex flex-row  h-12 w-18">
                    <HeaderLogo />
                    <HeaderLinks />
                    <div className="flex flex-row pl-64 ml-auto h-full">
                        <HeaderIcons />
                    </div>
                    <HeaderButtons />
                </div>
            </div>
        </div>
    );
}

export default Header;