import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Minter from './views/Minter';
import MainPage from './views/MainPage';
import ListPage from './views/ListPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/mint" component={Minter} />
        <Route exact path="/tokens" component={ListPage} />
      </Switch>
    </Router>
  );
}

export default App;
