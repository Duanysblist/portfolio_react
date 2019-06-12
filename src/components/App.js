import React from 'react';
import Carousel from './Carousel';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2 className='ui center aligned icon header'>Daniel Duany</h2>

        <div className='ui grid'>
          <div className='four wide column'>
            <div className='ui vertical fluid tabular menu'>
              <a href='/' className='active item'>
                Home
              </a>
              <a href='/projects' className='item'>
                Projects
              </a>
              <a href='/contact' className='item'>
                Contact
              </a>
              <a href='/about' className='item'>
                About
              </a>
            </div>
          </div>
          <div className='twelve wide stretched column'>
            <div className='ui segment'>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
