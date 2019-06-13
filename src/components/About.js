import React from 'react';
import portrait from './images/portrait.jpg';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div className='grid'>
          <div className='about-portrait'>
            <img src={portrait} alt='Portrait' />
          </div>
          <div className='about-text-1'>
            <p>
              Hey there! I'm Dan, aspiring software developer and ex-cook. I
              spend most of my days trying to absorb as much information as I
              can. I've worked on building full stack web applications in Java
              using Bootstrap, JQuery, Maven, Spring, and MySQL.I've also been
              gaining more experience using React and Redux, even creating a
              full stack web application using the MERN stack. I've gone to an
              exhaustingly long list of meetups and have even done the Grow With
              Google CUNY Hackathon in an attempt to make a voice controlled
              device to help students with diasbilities in the classroom.{' '}
            </p>
          </div>
          <div className='about-text-2'>
            <p>
              I'm really looking for a forward-thinking company to work for that
              I can pour myself into. I've played around with Android
              application development as well as Angular. My attention lies in
              mobile application development, but I can definitely be swayed by
              the right company and culture.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
