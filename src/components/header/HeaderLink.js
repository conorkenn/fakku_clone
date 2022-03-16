import React from "react";

const HeaderLink = props =>{
    return(
        <div>
            <a href="#" className="text-white capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 ">
                {props.name}
            </a>
        </div>
    );

};



export default HeaderLink;