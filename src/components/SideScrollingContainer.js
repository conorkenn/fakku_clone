
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
    return(
        <div className="flex flex-nowrap shrink-0 overflow-x-scroll mx-16 
       scrollbar scrollbar-thumb-red-700 scrollbar-track-gray-100">

                <SideScrollerCardGrid>{popularBooksToDisplay}</SideScrollerCardGrid>

        </div>
    );
}

export default SideScrollingContainer