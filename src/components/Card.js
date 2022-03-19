import React from "react";


const Card = (props) => {
    return(

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden">

            <a href="#">
                <img alt={props.title} class="flex" src={props.cover}/>
            </a>          

            <header className="flex items-center bg-transparent justify-center">
                <h1 className="text-lg">
                    <a className="text-red-700 font-bold flex flex-column hover:underline" href={props.url}>
                        {props.title}
                    </a>
                </h1>
            </header>
            <p className="flex justify-center">{props.author}</p>


        </div>
    </div>


    );

}

export default Card;