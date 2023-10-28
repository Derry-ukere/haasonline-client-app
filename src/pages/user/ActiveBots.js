/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable arrow-body-style */
import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

 
// com
import BotCard from '../../components/ActiveSoftwaresCard'

// redux
import { useDispatch, useSelector } from '../../redux/store';
import { fetchPersonalSoftwares } from '../../redux/slices/softwares/fetchuserSoftwares';


const BuyCrypto = () => {
  const {  personalSoftwares } = useSelector((state) => state.userSoftwares);
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchPersonalSoftwares())
  }, [])

  React.useEffect(() => {
    console.log('user softwares',personalSoftwares)
  }, [personalSoftwares])

    return (
        <Container>
            <main className="app-py-1" >
                <div className="fade-appear-done fade-enter-done">
                    <section className="center">
                        <h2>My Licensed Softwares</h2>
                    </section>
                    <Grid container spacing={2}>
                    {!!personalSoftwares && personalSoftwares.map((software, index) => (
                     <Grid item xs={12} md={4}  >
                      <BotCard software = {software} />
                    </Grid>
                    )) 
                    }
                  </Grid>
                </div>
            </main>
        </Container>
    );
};

export default BuyCrypto;
