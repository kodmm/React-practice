import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import useState from './components/useState';
import useState_1 from './components/useState_1';
import EffectClass from './components/useEffect';
import EffectFunc from './components/useEffect_1';
import useContext from './components/useContext';
import ThemeContext from './components/ThemeContext';
import Counter from './components/useReducer';
import Counter2 from './components/useReducer_1';


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
        <Route exact path="/useReducer/" component={Counter} />
        <Route exact path="/useReducer1/" component={Counter2} />
      </div>
    </BrowserRouter>
  );
}

export default App;
