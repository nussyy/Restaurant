import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container className="footer-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} className="footer-section">
          
            <Typography variant="body2">
             118/24 A Abeysekara Road, Kawdana Dehiwela
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:info@abcrestaurant.com" color="inherit">info@abcrestaurant.com</Link>
            </Typography>
            <Typography variant="body2">
              Phone: +94 768419267
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className="footer-section">
            
            <Box>
              <Link href="/" color="inherit" underline="hover">Home</Link>
              <Link href="/menu" color="inherit" underline="hover">Menu</Link>
              <Link href="/offers" color="inherit" underline="hover">Offers</Link>
              <Link href="/reservations" color="inherit" underline="hover">Reservations</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="footer-section">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box className="social-links">
              <IconButton href="#" color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box className="footer-bottom">
          <Typography variant="body2">
            &copy; 2024 ABC Restaurant. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
