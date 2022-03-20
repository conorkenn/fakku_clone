import React from "react";
import { SubHeader, Card, CardGrid } from "../components/index";
import newBooks from "../assets/newBooks";
import popularBooks from "../assets/popularBooks";

const newBooksToDisplay = newBooks.map((book)=>{
    return(
      <Card {...book} />
    );
  });
  
  const popularBooksToDisplay = popularBooks.map((book) =>{
    return(
      <Card {...book} />
    );
  });

const Home = () =>{
    return(
        <React.Fragment>
            <SubHeader subHeader={"Popular Right Now"} />
                <CardGrid>
                    {popularBooksToDisplay}
                </CardGrid>
            <SubHeader subHeader={"New Releases"} />
                <CardGrid>
                    {newBooksToDisplay}
                </CardGrid>
                <CardGrid>
                    {newBooksToDisplay}
                </CardGrid>
        </React.Fragment>
    );
}

export default Home;