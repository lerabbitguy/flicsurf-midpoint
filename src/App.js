import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './Movies';
import Shows from './Shows';

function App() {
  // const title = "yo";
  // const likes = 50;
  // const link = "http://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/shows">
              <Shows />
            </Route>
          </Switch>

          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p>
          <p>{ "yo" }</p>
          <p>{ [1,2,3,4,5] }</p>
          <p>{ Math.random() * 10 }</p>

          <a href={link}>google!!!!!</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
