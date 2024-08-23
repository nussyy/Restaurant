import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const Feature = ({ icon, title, description }) => {
  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Avatar src={icon} sx={{ margin: 'auto', width: 56, height: 56 }} />
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default Feature;
