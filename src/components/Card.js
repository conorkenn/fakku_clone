import React from "react";


const Card = ({url, title, author, cover}) => {
    return(

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden">

            <a href={url}>
                <img alt={title} class="flex" src={cover}/>
            </a>          

            <header className="flex items-center bg-transparent justify-center">
                <h1 className="text-lg">
                    <a className="text-red-700 font-bold flex flex-column hover:underline" href={url}>
                        {title}
                    </a>
                </h1>
            </header>
            <p className="flex justify-center">{author}</p>


        </div>
    </div>


    );

}

export default Card;