
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
        <div className="flex flex-nowrap shrink-0 overflow-scroll">
            <SideScrollerCardGrid>{popularBooksToDisplay}</SideScrollerCardGrid>
            
        </div>
    );
}

export default SideScrollingContainer