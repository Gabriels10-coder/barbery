import React from 'react';
import ListHair from './components/hair/layout/layoutHair'
import Presentation from './components/presetation/layoutPresentation/presentation';
import Banner from './components/banner/layoutBanner/layoutBanner'  
import './app.css'

const App=() => {
  return (
    <div  className="App">
      <Banner/>
     <Presentation/>
     <ListHair/>
    </div>
  );
}

export default App;
