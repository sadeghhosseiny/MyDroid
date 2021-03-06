import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import SignIN from './Component/SignInPage';
import SignUP from './Component/SignUp';
import { BrowserRouter as Router, Switch, Route, IndexRedirect, IndexRoute, Redirect } from 'react-router-dom';
import NavBar from './Component/NavBar';
import HomePage from './Component/HomePage';
import Item from './Component/Item';
import UploadApp from './Component/UploadApp';
import NotFound from './Component/NotFound';

function App() {
  return (

    <Router>

      <div className="appClass">
        <Switch>
          <Route path="/sign up">
            <SignUP />
          </Route>
          <Route path="/sign in" >
            {/* <IndexRoute component={SignIN} /> */}
            {/* <Redirect to="sign in" /> */}
            <SignIN />
          </Route>
          <Route exact path="/">
            <NavBar />
            <HomePage />
          </Route>
          <Route path="/item/:id">
            <NavBar />
            <Item />
          </Route>
          <Route path="/UploadApp">
            <NavBar />
            <UploadApp />
          </Route>
          <Route path="*" exact={true}>
            <Redirect to="404" />
            <NotFound />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
