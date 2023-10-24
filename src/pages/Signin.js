/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import LoginForm from '../sections/auth/login/LoginForm';
import {Appdetails} from '../config';

// ----------------------------------------------------------------------

export default function Signin() {
  return (
    <Page title="Sign in">
      <>
        <div className=" row" style={{ minHeight: '100vh' }}>
          <br />
          <div className="col l4 offset-l4 s12">
            <div className="container">
              <a href="https://haasonline.shop/"> 
                <br />
                <center>
             
                  <img
                    src={Appdetails.logo}
                    className="responsive-img"
                    alt="logo"
                    style={{ maxHeight: '150px' }}
                  />
                  <br />
                  <br />
                </center>
              </a>

              <div className="card-panel" style={{ borderRadius: '10px' }}>
                <center>
                  <br />
                  <LoginForm />
                  <br />
                  <p>
                    <Link to="/password">Forgot Password?</Link>
                  </p>
                  <p>
                    Dont have an account? <Link to="/signup">Sign Up</Link>
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </>
    </Page>
  );
}
