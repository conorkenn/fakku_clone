import React from 'react';
import {Card, Header, SubHeader, Footer, CardGrid} from './components/index'

function App() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader subHeader={"Popular Right Now"} />
      <CardGrid>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/t/time-for-work-english_1626200559/thumbs/002.thumb.jpg"} title ={"Time for Work"} author={"Aiya"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/s/snow-thaw-glass-english_1513631373/thumbs/001.thumb.jpg"} title ={"Snow Thaw Glass"} author={"Nippa Takahide"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/m/my-big-maid-english_1647302213/thumbs/001.thumb.jpg"} title ={"My Big Maid"} author={"Haru Yukiko"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/d/defy-me-english_1647038498/thumbs/001.thumb.jpg"} title ={"Defy Me"} author={"Nippa Takahide"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/b/bunny-bop-bop-english_1638360751/thumbs/001.thumb.jpg"} title ={"Bunny Bop Bop"} author={"Kasugano Tobari"}/>
      </CardGrid>
      <SubHeader subHeader={"New Releases"} />
      <CardGrid>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/l/lavender-maiden-english_1647038479/thumbs/001.thumb.jpg"} title ={"Lavender Maiden"} author={"Hinasaki Yo"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/s/servile-urara-chan-english_1646698122/thumbs/002.thumb.jpg"} title ={"Servile Urara-chan"} author={"Wantan Meo"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/n/nee-chans-secret-english_1647041355/thumbs/001.thumb.jpg"} title ={"Nee-chan's Secret"} author={"Hiroshiki"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/q/quarrel-docking-english_1582229968/thumbs/011.thumb.jpg"} title ={"Quarrel Docking!"} author={"Butcha-U"}/>
        <Card url={"#"} cover={"https://t.fakku.net/images/manga/h/happiness-halloween-english_1635174031/thumbs/001.thumb.jpg"} title ={"Happiness Halloween"} author={"Kaponco Taroh"}/>
      </CardGrid>
      <Footer />
    </React.Fragment>
  );
}

export default App;
