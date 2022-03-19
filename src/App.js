import React from 'react';
import {Card, Header, SubHeader, Footer, CardGrid} from './components/index'
import newBooks from './assets/newBooks';
import popularBooks from './assets/popularBooks';


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

function App() {
  return (
    <React.Fragment>
      <Header />
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
      <Footer />
    </React.Fragment>
  );
}

export default App;
