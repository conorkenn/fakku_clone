import React from "react";
import HeaderLink from "./HeaderLink";

const HeaderLinks = () =>{
    return(
        <div className="items-center flex-row flex">
            <div className="mr-2 ml-2 items-center flex-row flex">
                <HeaderLink name={"new releases"} />
            </div>
                <div className="h-4 w-0.5 bg-white"/>
                <HeaderLink name={"doujin"} />
                <HeaderLink name={"games"} />
                <HeaderLink name={"manga"} />
                <HeaderLink name={"unlimited"} />
                <div className="h-4 w-0.5 bg-white"/>
            <div className="mr-2 ml-2 items-center flex-row flex">
                <HeaderLink name={"tags"} />
                <HeaderLink name={"forums"} />
            </div>
        </div>
    );
    
}

export default HeaderLinks;