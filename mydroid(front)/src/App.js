import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIN from './Component/SignInPage';
import SignUP from './Component/SignUp';

function App() {
  return (
    <div className="appClass">
      <SignIN />
      <SignUP />
    </div>
  );
}

export default App;
