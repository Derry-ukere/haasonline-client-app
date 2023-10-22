/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import {Appdetails} from '../config';

function Footer() {
  return (
    <footer className="bg">
      <div className="container">
        <div className="row container app-py-1">
          <div className="col l8 s12 app-mobile-center">
            <img src={Appdetails.footerLogo} style={{ height: '72px' }} />
            <h3 style={{ marginTop: '0px', marginBottom: '10px' }}>{Appdetails.name}</h3>
            <p>
              <span className="material-icons notranslate">mail</span> {Appdetails.email}
            </p>
          </div> 
          <div className="col l4 s12 app-mobile-center">
            <br />
            <h3 style={{ marginBottom: '15px' }}>Quick Links</h3>
            <br />
            <Link to="/signin">My Account</Link>
            <br />
            <Link to="/signup">Create Account</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
