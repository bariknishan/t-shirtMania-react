import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <h1>Wellcome to t-shirtMania</h1>  

          <nav>
              <Link to="/home">Home</Link>
              <Link to="/orderreview">OrderReview</Link>
              <Link to="/grandpa">GrandPa</Link>
          </nav>
        </div>
    );
};

export default Header;