/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CardActions, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LoadingButton } from '@mui/lab';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { v4 as uuidv4 } from 'uuid'; 

//



import { useParams } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from '../../redux/store';
import { buySoftware } from '../../redux/slices/softwares/buysoftware';
import { getSoftware } from '../../redux/slices/softwares/getsingleSoftware';

import useAuth from '../../hooks/useAuth';



const TradingPlatformInfo = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [purchaseError, setPurchaseError] = React.useState(false)
    const { softwareDetails } = useSelector((state) => state.getsingleSoftware);
    const { isLoading, success } = useSelector((state) => state.buySoftwares);
    const { user, balance } = useAuth();

    const [buying, setBuying] = React.useState(false)
    const [successful, setSuccessful] = React.useState(false)



    React.useEffect(() => {
        dispatch(getSoftware(params.id));
    }, []);

    React.useEffect(() => {
        console.log({isLoading,success})
    }, [isLoading,success]);

    const buySoftwarehandler = () => {
        setBuying(true)
        if (balance < softwareDetails.cost) {
            setPurchaseError(true);
            setBuying(false)
            return;
        }
        const options = {
            user,
            softwareDetails,
            softwareID : uuidv4()
        }
        dispatch(buySoftware(options,setBuying,setSuccessful))
      
    }

    const features = [
        'Advanced Trading Bot Framework',
        'Real-time Market Data Integration',
        'Customizable Trading Strategies',
        'Risk Management Tools for Bots',
        'High-Frequency Trading Support',
        'Market Sentiment Analysis',
        'Arbitrage Opportunity Detection',
        'Automated Portfolio Rebalancing',
    ]

    return (
        <div>
            <Snackbar
                open={purchaseError}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    Insufficient Balance ! <a href='/user/deposits/crypto'>Deposit account</a>
                </Alert>
            </Snackbar>

            <Snackbar
                open={successful}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    You have Successfully Purchase software
                </Alert>
            </Snackbar>
            {
                softwareDetails ? (
                    <Card sx={{ maxWidth: 500, margin: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={softwareDetails.url}
                            alt={softwareDetails.name}
                        />
                        <CardContent>
                            <Typography variant="h5" sx={{ mt: 2 }}>{softwareDetails.name} (Version {softwareDetails.version})</Typography>
                            <Typography variant="body1">{softwareDetails.description}</Typography>

                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle1">Details:</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={`Developer: ${softwareDetails.developer}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Cost: ${softwareDetails.cost}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Supports all automated bots`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Backtesting Results: ${softwareDetails.backtestingResults}`} />
                                    </ListItem>
                                </List>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle1">Additional Information:</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="System Requirements: Details on supported platforms." />
                                    </ListItem>
                                </List>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle1">Features:</Typography>
                                <List>
                                    {features.map((feature, index) => (
                                        <ListItem key={index}>
                                            <ListItemText primary={feature} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle1">Frequently Asked Questions:</Typography>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="subtitle2">What Operating Systems are supported ?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Native applications and installers exist for Windows, Linux, macOS, as well as mobile access via TradeServer Cloud.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="subtitle2">Can I use a Virtual Private Server (VPS)? </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Yes, we recommend that you run your TradeServer instance from a host that is always online and operating optimally. You can even choose a VPS closer to the geolocation of your preferred exchanges for improved latency.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="subtitle2">How does TradeServer Enterprise store API keys? </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            TradeServer Enterprise offers non-custodial on-premise trading. Once activated, the keys are encrypted and stored locally on your infrastructure never leaving your machine.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <LoadingButton variant="contained" color="primary" loading ={buying} onClick={buySoftwarehandler}>
                                Buy Now
                            </LoadingButton>
                        </CardActions>
                    </Card>
                ) : <div> loading ...</div>
            }
        </div>

    );
};

export default TradingPlatformInfo;


