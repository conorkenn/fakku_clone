import { SubHeader, HeroAd, DropDown, PopularCheckboxList, CheckboxList, CardGrid, SmallerBasisCard } from "../components";
import newBooks from "../assets/newBooks";

const newBooksToDisplay = newBooks.map((book) =>{
    return(
      <SmallerBasisCard {...book} />
    );
  });

const Manga = () => {
    return(
        <div>
            <div>
                <SubHeader subHeader={"Hentai Books"} />
                <HeroAd imgUrl={"https://t.fakku.net/images/upload/IntercourseInn-MangaBar2.png"} imgLink={"https://www.fakku.net/hentai/intercourse-inn-english?utm_source=manga_banner&utm_medium=fakku&utm_campaign=interinn_preorder"}/>
            </div>

            <div class="flex mb-4">
                <div class="w-1/5 h-12">
                    <div className="pl-24 pt-4">
                        <p>SORT BY</p>
                        <DropDown />
                        <p>POPULAR TAGS</p>
                        <PopularCheckboxList />
                        <p>ALL TAGS</p>
                        <CheckboxList /> 
                    </div>
                </div>
                <div class="w-4/5 h-12 "> 
                    <div className="pr-14">
                    <CardGrid>
                        {newBooksToDisplay}
                    </CardGrid>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default Manga;