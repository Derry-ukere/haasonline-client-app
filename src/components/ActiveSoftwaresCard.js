/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'; // Import InputLabel
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


export default function MediaCard() {
  const [openModal, setOpenModal] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [secretKey, setSecretKey] = useState('S1E2C3R4E5T6K7E8Y9'); // Replace with actual secret key
  const [apiKey, setApiKey] = useState('A1B2C3D4E5F6G7H8I9'); // Replace with actual API key


  const handleRevealSecretKey = () => {
    setShowSecretKey(!showSecretKey);
  };

  const handleRevealApiKey = () => {
    setShowApiKey(!showApiKey);
  };


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [strategy, setStrategy] = useState('');
  const [riskLevel, setRiskLevel] = useState('');
  const [orderType, setOrderType] = useState('');
  const [executionPreference, setExecutionPreference] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [automatedTrading, setAutomatedTrading] = useState('');
  const [notifications, setNotifications] = useState('');


  const handleSaveConfiguration = () => {
    // Handle saving bot configuration data here
    // You can access the selected values from the state variables
    handleCloseModal();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.searchenginejournal.com/wp-content/uploads/2020/06/47e5b89a-2b1c-4dcd-a9a8-5db0118157cb-5efbf892d137a.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction={'row'} spacing = {3}>
        <Button size="large" color="success" variant="contained" onClick={handleOpenModal}>
          Configure Software
        </Button>
        <AccessTimeIcon size="large" style={{ marginTop: 8 }} />
        </Stack>
       
      </CardActions>

      {/* Configuration Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Bot Configuration</DialogTitle>
        <DialogContent>
          <form>
            <div>
              {/* Secret Key Input Field */}
              <TextField
                sx={{ mt: 2 }}
                label="Secret Key"
                fullWidth
                variant="outlined"
                value={showSecretKey ? secretKey : '********'} // Show '********' when hidden
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleRevealSecretKey}
                        color="primary"
                      >
                        {showSecretKey ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                type={showSecretKey ? 'text' : 'password'} // Toggle input type
              />
            </div>

            <div>
              {/* API Key Input Field */}
              <TextField
                label="API Key"
                fullWidth
                sx={{ mt: 2 }}
                variant="outlined"
                value={showApiKey ? apiKey : '********'} // Show '********' when hidden
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleRevealApiKey}
                        color="primary"
                      >
                        {showApiKey ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                type={showApiKey ? 'text' : 'password'} // Toggle input type
              />
            </div>

            {/* Trading Strategy Customization */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Customize Trading Strategy</InputLabel>
              <Select
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="dayTrading">Day Trading</MenuItem>
                <MenuItem value="swingTrading">Swing Trading</MenuItem>
                <MenuItem value="scalping">Scalping</MenuItem>
              </Select>
            </FormControl>

            {/* Risk Management */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Risk Level</InputLabel>
              <Select
                value={riskLevel}
                onChange={(e) => setRiskLevel(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>

            {/* Order Types */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Order Type</InputLabel>
              <Select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="marketOrders">Market Orders</MenuItem>
                <MenuItem value="limitOrders">Limit Orders</MenuItem>
                <MenuItem value="stopOrders">Stop Orders</MenuItem>
                <MenuItem value="trailingStopOrders">Trailing Stop Orders</MenuItem>
              </Select>
            </FormControl>

            {/* Trade Execution Preferences */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Execution Preference</InputLabel>
              <Select
                value={executionPreference}
                onChange={(e) => setExecutionPreference(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="immediate">Immediate Execution</MenuItem>
                <MenuItem value="fok">Fill or Kill (FOK)</MenuItem>
                <MenuItem value="gtc">Good 'til Canceled (GTC)</MenuItem>
                <MenuItem value="day">Day Orders</MenuItem>
              </Select>
            </FormControl>

            {/* Timeframes and Chart Preferences */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Timeframe Selection</InputLabel>
              <Select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="1-minute">1 Minute</MenuItem>
                <MenuItem value="5-minute">5 Minutes</MenuItem>
                <MenuItem value="daily">Daily</MenuItem>
              </Select>
            </FormControl>

            {/* Automated Trading */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Automated Trading</InputLabel>
              <Select
                value={automatedTrading}
                onChange={(e) => setAutomatedTrading(e.target.value)}
                variant="outlined"
              >
                <MenuItem value={true}>Enabled</MenuItem>
                <MenuItem value={false}>Disabled</MenuItem>
              </Select>
            </FormControl>

            {/* Notifications and Alerts */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Notifications and Alerts</InputLabel>
              <Select
                value={notifications}
                onChange={(e) => setNotifications(e.target.value)}
                variant="outlined"
              >
                <MenuItem value={true}>Enabled</MenuItem>
                <MenuItem value={false}>Disabled</MenuItem>
              </Select>
            </FormControl>

            {/* Additional Configuration Options (Continue adding fields as needed) */}
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
          <Button onClick={handleSaveConfiguration} color="primary" variant="contained">
            Save Configuration
          </Button>
        </DialogActions>

      </Dialog>

    </Card>
  );
}
