import { BrowserRouter, Switch, Route } from 'react-router-dom';
import timer from './components/timer.js';
import Counter_class from './components/counter_class.js';
import Counter_hooks from './components/counter_hooks.js';
import To_prevState from './components/to_prevState.js';
import Effect_class from './components/effect_class.js';
import Effect_hooks from './components/effect_hooks.js';
import Music from './components/music.js'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/timer" component={timer} />
          <Route exact path="/counter_class" component={Counter_class} />
          <Route exact path="/counter_hooks" component={Counter_hooks} />
          <Route exact path="/To_prevState" component={To_prevState} />
          <Route exact path="/Effect_class" component={Effect_class} />
          <Route exact path="/Effect_hooks" component={Effect_hooks} />
          <Route exact path="/Music" component={Music} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
