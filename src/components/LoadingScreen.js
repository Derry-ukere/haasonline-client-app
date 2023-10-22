import {Appdetails} from '../config';

export default function LoadingScreen() {
  const SRC = Appdetails.logo
  return (
    <>
      <center className="app-my-3">
        <img src= {SRC} className="responsive-img" alt="Logo" style={{ maxHeight: '250px' }} />
        <div className="container">
          <div className="container">
            <div className="progress">
              <div className="indeterminate" />
            </div>
          </div>
        </div>
      </center>
    </>
  );
}