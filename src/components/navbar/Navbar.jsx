
import React from 'react';
import Form from './form';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
function Navbar() {
  
 
  
  return (
    < >
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
        <Link to='/'><a className="navbar-brand" >eTKL</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <Link to='/'>
              <li className="nav-link">Home</li>
              </Link>
              <Link to='/categoria/Full'>
              <li className="nav-link">Full</li>
              </Link>
              <Link to='/categoria/TKL'>
              <li className="nav-link">TKL</li>
              </Link>
              <Link to='/categoria/60'>
              <li className="nav-link">60%</li>
              </Link>
            </ul>
            <Form contBuscar="teclados"/>
            <Link to='/cart'>
            <CartWidget/>
            </Link>

          </div>
        </div>
      </nav>


    </>
  );
}

export default Navbar;


