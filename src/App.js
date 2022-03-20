import React from 'react';
import {Header, Footer} from './components/index'
import Home from './pages/Home';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
