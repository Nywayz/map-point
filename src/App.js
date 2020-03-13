import React, { useState, useEffect } from 'react';
import MyMap from './components/mymap'
import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./App.css";
import ThemeContext from './ThemeContext';

function App() {
  const [themeColor, setThemeColor] = useState(false);

  return (
    <ThemeContext.Provider value={{themeColor, setThemeColor}}>
      <div className={themeColor ? 'App light' : 'App dark'}>
        <Router>

          <Link to="/map"><Button variant="contained" color="primary">Map</Button></Link>
          <Button variant="contained" color="primary" onClick={() => setThemeColor(prev => !prev)}>Thème {themeColor ? 'Dark' : 'Light'}</Button>

          <Switch>
            <Route path="/map"><MyMap/></Route>
            <Route path="/"><Redirect to="/home"/></Route>
          </Switch>
        </Router>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
