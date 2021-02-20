import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import SignIN from './Component/SignInPage';
import SignUP from './Component/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';

function App() {
  return (
    <Router>
      <div className="appClass">
        <Switch>
          <NavBar />
          <Route exact path="/">
            <SignUP />
          </Route>
          <Route path="/sign in">
            <SignIN />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
