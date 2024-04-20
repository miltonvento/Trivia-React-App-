import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function DisplayCard({question}) {
    console.log(question)
  return (
    <Card sx={{ width: 350, height: 200, overflow: "auto"}}>
      <CardMedia
        sx={{ height: 40 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
        {question}
        </Typography>
      </CardContent>
    </Card>
  );
}
