import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({ text, ...props }) => {
  return <MUIButton {...props}>{text}</MUIButton>;
};

export default Button;
