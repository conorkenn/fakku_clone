import HeaderLink from "./HeaderLink";
import HeaderSeperator from "./HeaderSeperator";

const HeaderLinks = () =>{
    return(
        <div className="items-center flex-row flex">
            <div className="mx-2 items-center flex-row flex">
                <HeaderLink name={"new releases"} />
                <HeaderSeperator />         
                <HeaderLink name={"doujin"} />
                <HeaderLink name={"games"} />
                <HeaderLink name={"manga"} />
                <HeaderLink name={"unlimited"} />
                <HeaderSeperator /> 
                <HeaderLink name={"tags"} />
                <HeaderLink name={"forums"} />
            </div>
        </div>
    );
    
}

export default HeaderLinks;