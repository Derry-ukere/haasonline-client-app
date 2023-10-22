/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable arrow-body-style */
import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const BuyCrypto = () => {
    return (
        <Container>
            <main className="app-py-1" >
                <div className="fade-appear-done fade-enter-done">
                    <section className="center">
                        <h2>SOFTWARES Details</h2>
                    </section>
                    <section className="feature-section">
                        <div className="feature-container">
                            <div className="feature">
                                <i className="icon fa fa-check-circle"></i>
                                <h3>Powerful Trading Strategies</h3>
                                <p>Maximize your trading potential with advanced algorithms and strategies.</p>
                            </div>
                            <div className="feature">
                                <i className="icon fa fa-desktop"></i>
                                <h3>User-Friendly Interface</h3>
                                <p>Our intuitive interface makes setting up and managing bots a breeze.</p>
                            </div>
                            <div className="feature">
                                <i className="icon fa fa-life-ring"></i>
                                <h3>24/7 Customer Support</h3>
                                <p>Our support team is available around the clock to assist you.</p>
                            </div>
                            <div className="feature">
                                <i className="icon fa fa-balance-scale"></i>
                                <h3>Risk Management Tools</h3>
                                <p>Protect your investments with automated risk management features.</p>
                            </div>
                        </div>
                    </section>
                    <Button size='large' variant='contained' color='success'>
                        Purchase Software
                    </Button>
                </div>
            </main>
        </Container>
    );
};

export default BuyCrypto;
