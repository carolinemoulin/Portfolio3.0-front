import React from 'react';
import './css/Home.css';

const Header = (props) => {

  return (
    <header className="container">
      <div className="row align-items-center">
        <div className="col-md-4"><img className="img-fluid" src="/images/profile.JPG" alt="" /></div>
        <div className="col-md-8">
          <h1>Portfolio</h1>  
        </div>
      </div>
    </header>
  );
}

export default Header;