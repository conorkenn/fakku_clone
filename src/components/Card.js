import React from "react";


const Card = (props) => {
    return(
        /*
        <div>
            <div className="w-full">
                <div className="w-full">
                    <a href={props.url}>
                        <img src={props.cover} alt={props.title} className=""/>
                    </a>
                </div>
            </div>
            <div className="text-red-700 font-bold flex flex-column justify-center hover:underline">
                <a href={props.url}>
                    {props.title}
                </a>
            </div>
            <div className="text-black font-normal flex flex-column justify-center ">
                <a href={props.url}>
                    {props.author}
                </a>
            </div>
        </div>
        */

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div className="overflow-hidden">

            <a href="#">
                <img alt={props.title} class="block" src={props.cover}/>
            </a>          

            <header className="flex items-center bg-transparent">
                <h1 className="text-lg">
                    <a className="text-red-700 font-bold flex flex-column justify-center hover:underline pl-50%" href={props.url}>
                        {props.title}
                    </a>
                </h1>
            </header>


        </div>
    </div>


    );

}

export default Card;