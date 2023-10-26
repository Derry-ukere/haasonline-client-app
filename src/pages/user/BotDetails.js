import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Avatar,Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const TradingPlatformInfo = () => {
    const data =     {
        id :1,
        name: "TradeMaster Pro",
        image: "https://firebasestorage.googleapis.com/v0/b/haasonline-b56e4.appspot.com/o/botte.jpeg?alt=media&token=0e3f36b2-9190-4212-a0b9-54ea5718808a&_gl=1*hkvvnu*_ga*MTg1NzgxNDk3MC4xNjk4MTY3Nzky*_ga_CW55HF8NVT*MTY5ODE2NzgzOC4xLjEuMTY5ODE2ODU0My41MS4wLjA.",
        description: "An all-in-one trading platform with advanced charting and risk management tools.",
        exchanges: ["binance", "coinbase", "kraken", "bitstamp"],
        cost: "$1499",
        version: "2.0",
        Developer: "TradeTech Solutions",
        BacktestingResults: "$8,500 profit in the last 6 months",
        ReleaseDate: "2023-11-05",
        apiAccess: { 
          apiType: "REST API",
          apiKey: "tmpro123456api", 
        },
        users : [{
          id : "yy756eh",
          status : "pending"
        }]
      }

     const  features =[
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
    <Paper elevation={3} sx={{ p: 2, maxWidth: 500, margin: 'auto' }}>
      <Avatar src={data.image} alt={data.name} sx={{ width: 100, height: 100 }} />
      <Typography variant="h5" sx={{ mt: 2 }}>{data.name} (Version {data.version})</Typography>
      <Typography variant="body1">{data.description}</Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Details:</Typography>
        <List>
          <ListItem>
            <ListItemText primary={`Developer: ${data.Developer}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Cost: ${data.cost}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Available Exchanges: ${data.exchanges.join(', ')}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Release Date: ${data.ReleaseDate}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Backtesting Results: ${data.BacktestingResults}`} />
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
            TradeServer Enterprise offers non-custodial on-premise trading. Once activated, the keys are encrypted and stored locally on your infrastructure never leaving your machine.            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Add more FAQ items as needed */}
      </Box>

      {/* Purchase Button */}
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" href="#purchase-link">
          Buy Now
        </Button>
      </Box>
    </Paper>
  );
};

export default TradingPlatformInfo;
