import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbrotton">
        <h1>Demo Administration</h1>
        <p>React, redux and react-router demo</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
