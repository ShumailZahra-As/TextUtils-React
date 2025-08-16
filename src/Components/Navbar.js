  import React from 'react';
  import PropTypes from 'prop-types';
  import {Link} from 'react-router-dom';
  export default function Navbar(props) {
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>  {/*render title*/ }
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>  {/*render aboutText*/ }
          </li>
        </ul>

        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}> {/*so that text adjust  according to mode*/}
  <input className="form-check-input" onClick ={props.toggleMode}type="checkbox" role="switch" id="switchCheckDefault"/>
<label className="form-check-label" htmlFor="switchCheckDefault"> Enable Dark Mode</label>  
</div>
          {/* {search button} */}   
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
    )
  }
  //Define proptypes


  Navbar.propTypes = {
      title: PropTypes.string.isRequired, //title is required
      aboutText: PropTypes.string //aboutText is NOT required if you want defaultProps to apply
  };

  Navbar.defaultProps = {
    title: "Set title here", //this default is used if title is not passed
    aboutText: "About" //this default is used if aboutText is not passed
  };
