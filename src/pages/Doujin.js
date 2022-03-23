import React from "react";
import { SubHeader, HeroAd, SmallerBasisCard, CardGrid, PopularCheckboxList, CheckboxList, DropDown} from "../components";
import newBooks from "../assets/newBooks";



const newBooksToDisplay = newBooks.map((book) =>{
    return(
      <SmallerBasisCard {...book} />
    );
  });


const Doujin = () => {
    return(
        <div>
            <div>
                <SubHeader subHeader={"Hentai Doujin"}/>
                <HeroAd imgUrl={"https://t.fakku.net/images/upload/f4u%20banner.png"} imgLink={"https://www.fakku.net/hentai/f4u-box-english?utm_source=fakku-site&utm_medium=top-bar&utm_campaign=f4u-box"}/>
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

export default Doujin;