import { BrowserRouter, Switch, Route } from 'react-router-dom';
import timer from './components/timer.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/timer" component={timer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
