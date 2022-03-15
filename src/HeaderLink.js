import React from "react";

const HeaderLink = props =>{
    return(
        <div>
            <a href="#" className="text-white capitalize text-xl font-normal">
                {props.name}
            </a>
        </div>
    );

};



export default HeaderLink;