import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Carousel from './components/Carousel';

function wasClicked() {
  console.log(this);
}

const routing = (
  <Router>
    <div>
      <div className='ui grid'>
        <div className='six wide column'>
          <div className='ui vertical fluid tabular menu'>
            <Link to='/' onClick={wasClicked} className='active item'>
              Home
            </Link>
            <Link
              to='/projects'
              onClick={wasClicked}
              className={`${wasClicked} item`}
            >
              Projects
            </Link>
            <Link
              to='/contact'
              onClick={wasClicked}
              className={`${wasClicked} item`}
            >
              Contact
            </Link>
            <Link
              to='/about'
              onClick={wasClicked}
              className={`${wasClicked} item`}
            >
              About
            </Link>
          </div>
        </div>
        <div className='ten wide stretched column'>
          <div className='ui segment'>
            <Carousel />
          </div>
        </div>
      </div>
      <Route path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/projects' component={Projects} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.querySelector('#root'));
