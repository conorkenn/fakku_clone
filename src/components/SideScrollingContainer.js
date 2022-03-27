
import { useRef } from "react";
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai';
import SideScrollerCardGrid from "./card/SideScrollerCardGrid";


const SideScrollingContainer = ({books}) => {
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
                    
                    <SideScrollerCardGrid>{books}</SideScrollerCardGrid>
            </div>
        </div>
    );
}

export default SideScrollingContainer