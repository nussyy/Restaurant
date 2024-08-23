import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Button from './Button';

const CategoryCard = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button text="Order Now" variant="contained" color="primary" sx={{ marginTop: 2 }} />
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
