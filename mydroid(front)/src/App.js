import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIN from './Component/SignInPage';
import SignUP from './Component/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
