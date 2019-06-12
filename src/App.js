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

// Set up Home page with maybe a cool design or animation
// Set up About page with photo, one or two short paragraphs
// Set up Projects page
// Import photos
// Links to heroku applications
// In depth explanations of applications with difficulties along the way
//Set up part of the page for projects that are soon to come
// Set up Contact page
// Try to make twitter feed
// Create a form to send me an email as well as post my email address
// LinkedIn and Github pages
// Resume download link
