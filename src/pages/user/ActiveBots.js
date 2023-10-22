/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable arrow-body-style */
import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';


// com
import BotCard from '../../components/ActiveSoftwaresCard'


const BuyCrypto = () => {
    return (
        <Container>
            <main className="app-py-1" >
                <div className="fade-appear-done fade-enter-done">
                    <section className="center">
                        <h2>My Licensed Softwares</h2>
                    </section>
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
                </div>
            </main>
        </Container>
    );
};

export default BuyCrypto;
