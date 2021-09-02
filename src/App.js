import logo from './logo.png';
import './App.css';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Home from './pages/home';
import Create from './pages/create';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar/>
        <Sidebar />
        <div className="content" style={{padding: '50px'}}>
        <Link to='/create'>
          create
        </Link>
          <Switch>
            <Route path='/' component={Home}></Route>
            <Route path='/create' component={Create}></Route>
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
