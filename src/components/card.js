import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP.1XVKDY_O_MmeNYvzTFznhwHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sanam Teri Kasam
          </Typography>
<Rating name="read-only" value={3} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}