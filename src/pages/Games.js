import { SubHeader, HeroAd, DropDown, PopularCheckboxList, CheckboxList, CardGrid, PlatformsCheckboxList, GameCard } from "../components";
import games from "../assets/games";


const gamesToDisplay = games.map((game) =>{
    return(
      <GameCard {...game} />
    );
  });

const Games = () => {
    return(
        <div>
            <div>
                <SubHeader subHeader={"Hentai Games"} />
                <HeroAd imgUrl={"https://t.fakku.net/images/upload/evenicle-topbarbuy.png"} imgLink={"https://www.fakku.net/games/evenicle-2-english?utm_source=fakku-site&utm_medium=games-banner&utm_campaign=evenicle-2"}/>
            </div>

            <div class="flex mb-4">
                <div class="w-1/5 h-12">
                        
                    <div className="pl-24 pt-4">
                        <p>SORT BY</p>
                        <DropDown />
                        <p>PLATFORMS</p>
                        <PlatformsCheckboxList />
                        <p>POPULAR TAGS</p>
                        <PopularCheckboxList />
                        <p>ALL TAGS</p>
                        <CheckboxList /> 
                    </div>
                </div>
                <div class="w-4/5 h-12 "> 
                    <div className="pr-14">
                        <CardGrid>
                            {gamesToDisplay}
                        </CardGrid>
                    </div>
                    </div>
                </div>
        </div>
    );
}

export default Games;