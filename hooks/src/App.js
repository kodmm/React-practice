import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import useState from './components/useState';
import useState_1 from './components/useState_1';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={useState} />
        <Route exact path="/useState/" component={useState_1} />
      </div>
    </BrowserRouter>
  );
}

export default App;
