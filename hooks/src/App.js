import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import useState from './components/useState';
import useState_1 from './components/useState_1';
import EffectClass from './components/useEffect';
import EffectFunc from './components/useEffect_1';
import useContext from './components/useContext';
import ThemeContext from './components/ThemeContext';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={useState} />
        <Route exact path="/useState/" component={useState_1} />
        <Route exact path="/useEffect/" component={EffectClass} />
        <Route exact path="/EffectFunc/" component={EffectFunc} />
        <Route exact path="/useContext/" component={useContext} />
        <Route exact path="/ThemeContext/" component={ThemeContext} />
      </div>
    </BrowserRouter>
  );
}

export default App;
