import React from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import img from '../../App/assets/img/Logo.svg';
import imgGreen from '../../App/assets/img/logo-green.svg';

function Footer(): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: '#f3eece',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        marginTop: '50px',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              <img src={imgGreen} alt="logo" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Elbrus`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;