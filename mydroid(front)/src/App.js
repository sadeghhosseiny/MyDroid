import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import SignIN from './Component/SignInPage';
import SignUP from './Component/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import HomePage from './Component/HomePage';
//import { useContext } from 'react';
import { Context } from './Component/Context';

function App() {

  return (

    <Router>

      <div className="appClass">
        <Switch>
          <Route exact path="/">
            <SignUP />
          </Route>
          <Route path="/sign in">
            <SignIN />
          </Route>
          <Route>
            <NavBar />
            <HomePage />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
