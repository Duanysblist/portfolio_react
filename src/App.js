import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Daniel Duany's Portfolio</h1>
          <ul className='header'>
            <li>
              <NavLink exact to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
