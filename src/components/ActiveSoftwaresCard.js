import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography, Stack} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function MediaCard() {
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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction={'row'} spacing={4}>
        <Button size="large" color='success' variant='contained'>Configure Software</Button>
        <AccessTimeIcon  size = 'large'  style = {{marginTop : 8}}/>
        </Stack>
      </CardActions>
    </Card>
  );
}