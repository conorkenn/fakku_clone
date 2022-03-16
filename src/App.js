import React from 'react';
import {Card, Header, SubHeader} from './components/index'

function App() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader subHeader={"Popular Right Now"} />
      <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
      <SubHeader subHeader={"New Releases"} />
      <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
      
    </React.Fragment>
  );
}

export default App;
