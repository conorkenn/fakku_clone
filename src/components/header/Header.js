import React from "react";
import HeaderButtons from "./HeaderButtons";
import HeaderIcons from "./HeaderIcons";
import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";

const Header = () =>{
    return(
        <div className="sticky top-0 z-50">
            <div className="bg-red-700 shadow-lg flex pr-5 pl-5 ">
                <div className="ml-4 flex h-14 pl-4">
                    <HeaderLogo />
                    <HeaderLinks />
                    <div className="flex  lg:pl-40 3xl:pl-80">
                        <HeaderIcons />
                        <HeaderButtons /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;