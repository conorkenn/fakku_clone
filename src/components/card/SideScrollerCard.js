import React from "react";


const SideScrollerCard = ({url, title, author, cover}) => {
    return(
        <div className="my-4 px-1 basis-1/12 drop-shadow-lg">
            <div className="overflow-hidden">

            <a href={url}>
                <img alt={title} class="flex max-w-none" src={cover}/>
            </a>          

            <div className="flex items-center bg-transparent justify-center">
                <h1 className="text-sm">
                    <a className="text-black font-bold flex flex-column overflow-hidden hover:underline" href={url}>
                        {title}
                    </a>
                </h1>
            </div>
        </div>
    </div>
    );
}

export default SideScrollerCard;