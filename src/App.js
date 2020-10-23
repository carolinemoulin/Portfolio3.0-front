import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Projects from './component/Projects';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
