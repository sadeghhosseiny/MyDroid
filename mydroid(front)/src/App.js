import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import SignIN from './Component/SignInPage';
import SignUP from './Component/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import HomePage from './Component/HomePage';
import Item from './Component/Item';
import UploadApp from './Component/UploadApp';
import NotFound from './Component/NotFound';
import Games from './Component/Games';
import JustApps from './Component/JustApps';

function App() {
  return (

    <Router>

      <div className="appClass">
        <Switch>
          <Route exact path="/">
            <NavBar />
            <HomePage />
          </Route>
          <Route path="/sign up">
            <SignUP />
          </Route>
          <Route path="/sign in" >
            <SignIN />
          </Route>
          <Route path="/item/:id">
            <NavBar />
            <Item />
          </Route>
          <Route path="/UploadApp">
            <NavBar />
            <UploadApp />
          </Route>
          <Route path="/Games">
            <NavBar />
            <Games />
          </Route>
          <Route path="/Apps">
            <NavBar />
            <JustApps />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
