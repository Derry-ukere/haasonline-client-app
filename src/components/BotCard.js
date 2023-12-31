import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({software}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={software.url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {software.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {software.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{software.cost}</Button>
        <Button size="small"  href={`/user/software/${software.id}`}>Purchase</Button>
      </CardActions>
    </Card>
  );
}

