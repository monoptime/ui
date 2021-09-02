import logo from './logo.png';
import './App.css';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Router>
  );
}

export default App;
