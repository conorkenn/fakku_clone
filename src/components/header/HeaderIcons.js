import { IoIosNotifications } from 'react-icons/io';
import {  IoSearch, IoCart } from 'react-icons/io5'

const HeaderIcons = () =>{
    return (
        <div className="items-center flex-row flex">
            <div className="mr-2 ml-2 items-center flex-row flex">
                <button className="text-white capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:text-red-300">
                    <IoSearch/>
                </button>
                </div>
                <div className="mr-2 ml-2 items-center flex-row flex">
                    <a href="#" className="text-white capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:text-red-300">
                        <IoIosNotifications />
                    </a>
                </div>
                <div className="mr-2 ml-2 items-center flex-row flex">
                    <a href="#" className="text-white capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:text-red-300">  
                        <IoCart />
                    </a>
            </div>
        </div>
    );

}

export default HeaderIcons