import React from 'react';
import {Header, Footer} from './components/index'
import Routing from './routing/Routing';


function App() {
  return (
    <React.Fragment>
      <Header />
        <Routing />
      <Footer />
    </React.Fragment>
  );
}

export default App;
