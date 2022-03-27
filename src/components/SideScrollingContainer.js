
import { useRef } from "react";
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai';
import newBooks from "../assets/newBooks";
import SideScrollerCard from "./card/SideScrollerCard";
import SideScrollerCardGrid from "./card/SideScrollerCardGrid";


const popularBooksToDisplay = newBooks.map((book) =>{
    return(
        <div className="mr-3">
                <SideScrollerCard {...book} />
        </div>
      
    );
  });


const SideScrollingContainer = () => {
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    }

    return(
        <div className="mx-14">
            <div className="text-red-700/75 text-7xl hover:text-8xl">
                <button className="absolute z-50 pt-28" onClick={() => scroll(-500)}>
                    <AiFillLeftCircle />
                </button>
                <button className=" absolute right-0 pt-28 pr-12 z-50" onClick={() => scroll(500)}>
                    <AiFillRightCircle />
                </button>
            </div>
            <div className="flex flex-nowrap shrink-0 overflow-x-scroll mx-2
                        scrollbar scrollbar-thumb-red-700 scrollbar-track-gray-100 scroll-smooth" ref={ref}>
                    
                    <SideScrollerCardGrid>{popularBooksToDisplay}</SideScrollerCardGrid>
            </div>
        </div>
    );
}

export default SideScrollingContainer