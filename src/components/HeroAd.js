import React from "react";

const HeroAd = ({imgUrl, urlLink}) =>{
    return(
        <React.Fragment>
            <a href={urlLink}>
                <img className="mx-auto mt-4" src={imgUrl} alt="ad from fakku"/>
            </a>
        </React.Fragment>
    );
}

export default HeroAd;