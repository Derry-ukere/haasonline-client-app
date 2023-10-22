/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
import React from 'react'; 
import {Link} from 'react-router-dom'

const Mining = () => {
  return (
    <main className="app-py-1" style={{ height: '100vh' }}>
      <div className="fade-appear-done fade-enter-done">
        <div>
          <div className>
            <section className="pc-container" style={{ margin: 'auto' }}>
              <div className="container">
                <div className="center">
                  <h2 style={{ margin: '0px', padding: '0px', fontWeight: 'bold' }}>$0.00</h2>
                  <span style={{ fontSize: '11px' }}>MINING BALANCE</span>
                  <br />
                </div>
                <div className="container">
                  <br />
                  <ul className="collection">
                    <Link className="collection-item bg center app-py-1" to="/user/mining/contracts">
                      <li style={{ fontSize: '13px' }}>MY MINING CONTRACTS</li>
                    </Link>
                    <Link className="collection-item bg center app-py-1" to="/user/deposits/crypto">
                      <li style={{ fontSize: '13px' }}>BUY MINING CONTRACT</li>
                    </Link>
                    <li className="collection-item bg">
                      <div className="row">
                        
                        <div className="col l9 s6">
                          0.000000 BTC
                          <br />
                          <span className="grey-text">$0.00</span>
                        </div>
                        <div className="col l2">
                          <br />
                          <span className="grey-text"> GH/s</span>
                          <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item bg">
                      <div className="row">
                        
                        <div className="col l9 s6">
                          0.000000 ETH
                          <br />
                          <span className="grey-text">$0.00</span>
                        </div>
                        <div className="col l2">
                          <br />
                          <span className="grey-text"> GH/s</span>
                          <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item bg">
                      <div className="row">
                      
                        <div className="col l9 s6">
                          0.000000 DOGE
                          <br />
                          <span className="grey-text">$0.00</span>
                        </div>
                        <div className="col l2">
                          <br />
                          <span className="grey-text"> GH/s</span>
                          <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item bg">
                      <div className="row">
                        
                        <div className="col l9 s6">
                          0.000000 BNB
                          <br />
                          <span className="grey-text">$0.00</span>
                        </div>
                        <div className="col l2">
                          <br />
                          <span className="grey-text">0 GH/s</span>
                          <br />
                        </div>
                      </div>
                    </li>
                    <li className="collection-item bg">
                      <div className="row">
                       
                        <div className="col l9 s6">
                          0.000000 ATOM
                          <br />
                          <span className="grey-text">$0.00</span>
                        </div>
                        <div className="col l2">
                          <br />
                          <span className="grey-text"> GH/s</span>
                          <br />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <br />
            <div className="fixed-footer mobile-bg">
              <ul className="tabs">
                <li className="tab col s6">
                  <a className href="/user">
                    <span className="material-icons notranslate">assessment</span>
                    <span>Trading</span>
                  </a>
                </li>
                <li className="tab col s6">
                  <a className="active" href="/user">
                    <span className="material-icons notranslate">copyright</span>
                    <span>Mining</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mining;
