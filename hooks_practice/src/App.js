import { BrowserRouter, Switch, Route } from 'react-router-dom';
import timer from './components/timer.js';
import Counter_class from './components/counter_class.js';
import Counter_hooks from './components/counter_hooks.js';
import To_prevState from './components/to_prevState.js';
import Effect_class from './components/effect_class.js';
import Effect_hooks from './components/effect_hooks.js';
import Music from './components/music.js';
import React, {createContext, useState} from 'react';
import './App.css';
import Context from './components/ContextSample/ContextA.js';
import Counter_reducer from './components/counter_reducer.js';
import Counter_reducer2 from './components/counter_reducer2';
import Counter_reducer3 from './components/counter_reducer3';
import Counter_reducer4 from './components/counter_reducer4';
//createContextを使いUserContextとHobbyCotextを作成
export const UserContext = createContext()
export const HobbyContext = createContext()


function App() {
  //useStateを使いuserを作成
  const [user, setUser] = useState({
    name: 'Nissy',
    age: 17
  })
  //useStateを使いhobbyを作成
  const [hobby, setHobby] = useState('音楽鑑賞')
  return (
    <BrowserRouter>
      <div className='App'>
        {/* UserContext.Providerを作成。valueにはuserをセット */}
        <UserContext.Provider value={user} >

          {/* HobbyContext.Providerを作成。valueにはhobbyをセット */}
          <HobbyContext.Provider value={hobby} >
          <Switch>
            <Route exact path="/timer" component={timer} />
            <Route exact path="/counter_class" component={Counter_class} />
            <Route exact path="/counter_hooks" component={Counter_hooks} />
            <Route exact path="/To_prevState" component={To_prevState} />
            <Route exact path="/Effect_class" component={Effect_class} />
            <Route exact path="/Effect_hooks" component={Effect_hooks} />
            <Route exact path="/Music" component={Music} />
            <Route exact path="/Context" component={Context} />
            <Route exact path="/counter_reducer" component={Counter_reducer} />
            <Route exact path="/counter_reducer2" component={Counter_reducer2} />
            <Route exact path="/counter_reducer3" component={Counter_reducer3} />
            <Route exact path="/counter_reducer4" component={Counter_reducer4} />
            
          </Switch>
          </HobbyContext.Provider>
        </UserContext.Provider>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
