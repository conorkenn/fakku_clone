import { Card, CardGrid, SubHeader } from "../components";
import tags from "../assets/tags";

const tagsToDisplay = tags.map((tag)=>{
    return(
      <Card {...tag} />
    );
  });

const Tags = () => {
    return(
        <div>
            <a href="#" className="hover:underline text-red-600">
                <SubHeader subHeader={"Hentai Tags & Genres"} />
            </a> 
            <CardGrid>
                    {tagsToDisplay}
            </CardGrid>
        </div>
    );
}

export default Tags;