import React from "react";


const SideScrollerCard = ({url, title, author, cover}) => {
    return(
        <div className="my-4 mx-1 px-1 drop-shadow-lg max-w-xs">
            <div className="overflow-hidden">

            <a href={url}>
                <img alt={title} class="rounded overflow-hidden max-w-none h-80" src={cover}/>
            </a>          

            <div className="flex items-center bg-transparent justify-center">
                <h1 className="text-sm">
                    <a className="text-black font-bold overflow-hidden hover:underline" href={url}>
                        {title}
                    </a>
                </h1>
            </div>
        </div>
    </div>
    );
}

export default SideScrollerCard;