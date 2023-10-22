/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Grid, Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';

// com
import BotCard from '../../components/BotCard'


// redux
import { useDispatch } from '../../redux/store';
import { fetchUserTrades } from '../../redux/slices/trades/userTrades';



const Home = () => {
  const { deposits, balance, profits, withdrawal } = useAuth();
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchUserTrades())
  }, [])


  return (
    <main className="app-py-1" style={{ height: '100vh' }}>
      <div className="fade-appear-done fade-enter-done">
        <div>
          <div>
            <div className="pc-container" style={{ margin: 'auto' }}>
              <div className="row">
                <div className="col l4 s12">
                  <div className="center">
                    <div className="row">
                      <Stack direction={'row'}>
                        <div className="col l6 s6">
                          <h3 className="notranslate" style={{ margin: '0px', padding: '0px' }}>
                            ${balance}
                          </h3>
                          <span style={{ fontSize: '10px' }}>BALANCE</span>
                        </div>
                        <div className="col l6 s6">
                          <h3 style={{ margin: '0px', padding: '0px' }}>{profits}</h3>
                          <span style={{ fontSize: '10px' }}>ORDERS</span>
                        </div>
                        <div className="col l6 s6">
                          <h3 style={{ margin: '0px', padding: '0px' }}>{deposits}</h3>
                          <span style={{ fontSize: '10px' }}>TICKETS</span>
                        </div>
                        <div className="col l6 s6">
                          <h3 style={{ margin: '0px', padding: '0px' }}>{withdrawal}</h3>
                          <span style={{ fontSize: '10px' }}> REPORTS</span>
                        </div>
                      </Stack>
                    </div>
                    <br />

                    <br />
                  </div>
                  <div className="pc-container row center" style={{ margin: 'auto' }}>
                    <div className="col l6 s4">
                      <div className="center">
                        <Link to="/user/deposits/crypto" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(50, 167, 226)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          >
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px' }}
                            >
                              attach_money
                            </p>
                          </div>
                        </Link>
                        FUND ACCOUNT
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="col l6 s4">
                      <div className="center">
                        <Link to="/user/account" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(255, 135, 0)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          >
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px' }}
                            >
                              supervised_user_circle
                            </p>
                          </div>
                        </Link>
                        ACCOUNT SETTINGS
                        <br />
                        <br />
                      </div>
                    </div>
                    <div className="col l6 s4">
                      <div className="center">
                        <Link to="/user/active-softwares" style={{ color: 'white' }}>
                          <div
                            style={{
                              background: 'rgb(255, 135, 0)',
                              color: 'white',
                              padding: '1rem',
                              borderRadius: '10px',
                            }}
                          > 
                            <p
                              className="material-icons notranslate"
                              style={{ fontSize: '30px', margin: '0px', padding: '0px' }}
                            >
                              access_time
                            </p>
                          </div>
                        </Link>
                            PURCHASED SOFTWARES
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <Container className="col l8 s12">
                  <center>
                    <ul className="tabs bg">
                      <li className="tab col s6">
                        <Link to="#closed" className="active">
                          <span>TOP SOFTWARES</span>
                        </Link>
                      </li>
                    </ul>
                  </center>
                  <br />
                  <br />

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}  >
                      <BotCard />
                    </Grid>
                    <Grid item xs={12} md={4}  >
                      <BotCard />
                    </Grid>
                    <Grid item xs={12} md={4}  >
                      <BotCard />
                    </Grid>
                  </Grid>

                </Container>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;