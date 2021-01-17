import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import Servers from './pages/Servers';
import Settings from "./pages/Settings";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Servers}></Route>
            <Route path='/settings' component={Settings}></Route>
            <Route path='/about' component={About}></Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
