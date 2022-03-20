import React from "react";

const HeaderLink = ({name}) =>{
    return(
        <React.Fragment>
            <a href={`/${name}`} className="text-white capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:text-red-300 hover:underline">
                {name}
            </a>
        </React.Fragment>
    );

};

export default HeaderLink;