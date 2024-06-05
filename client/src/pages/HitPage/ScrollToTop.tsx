import React, { useCallback } from 'react';
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

function ScrollToTopFab() {
  const trigger = useScrollTrigger({
    threshold: 300,
  });
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
          sx={{
            '&:hover': {
              backgroundColor: '#547050',
            },
            color: 'white',
            backgroundColor: '#81a67c',
          }}
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Box>
    </Zoom>
  );
}
export default ScrollToTopFab;
