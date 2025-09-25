import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function PokeCard({name, sprite, ability, type}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={sprite}
          alt="green iguana"
          sx={{height: '300px', backgroundImage: 'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {ability}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          CATCH
        </Button>
      </CardActions>
    </Card>
  );
}
