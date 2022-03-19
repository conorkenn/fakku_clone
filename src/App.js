import React from 'react';
import {Card, Header, SubHeader, Footer, CardGrid} from './components/index'

function App() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader subHeader={"Popular Right Now"} />
      <CardGrid>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
      </CardGrid>
      <SubHeader subHeader={"New Releases"} />
      <CardGrid>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
      </CardGrid>
      <Footer />
    </React.Fragment>
  );
}

export default App;
