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


function App() {

  return (

    <Router>

      <div className="appClass">
        <Switch>
          <Route path="/sign up">
            <SignUP />
          </Route>
          <Route exact path="/sign in">
            <SignIN />
          </Route>
          <Route path="/HomePage">
            <NavBar />
            <HomePage />
          </Route>
          <Route exact path="/item/:id">
            <NavBar />
            <Item />
          </Route>
          <Route path="/UploadApp">
            <NavBar />
            <UploadApp />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
