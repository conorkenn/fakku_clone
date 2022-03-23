import React from "react";


const Card = ({url, title, author, cover}) => {
    return(
        <div className="my-4 px-1 w-full basis-1/4 drop-shadow-lg">
            <div className="overflow-hidden">

            <a href={url}>
                <img alt={title} class="flex" src={cover}/>
            </a>          

            <div className="flex items-center bg-transparent justify-center">
                <h1 className="text-lg">
                    <a className="text-red-700 font-bold flex flex-column hover:underline" href={url}>
                        {title}
                    </a>
                </h1>
            </div>
            <p className="flex justify-center">{author}</p>
        </div>
    </div>
    );
}

export default Card;