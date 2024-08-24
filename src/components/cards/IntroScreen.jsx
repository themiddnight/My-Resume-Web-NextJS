'use client';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function IntroScreen ({ children, data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isEnter, setIsEnter] = useState(false);

  const handleEnter = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsEnter(true);
    }, 500);
  }

  return (
    <Box>
      <Box
        position={'absolute'}
        zIndex={10}
        width={'100%'}
        height={isEnter ? '0vh' : '100dvh'}
        display={'flex'}
        overflow={'hidden'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        className={"basic-bg"}
        sx={{
          transition: 'all 1.5s cubic-bezier(0.5, 0, 0, 1)',
        }}
      >
        <Box textAlign={'center'} className={!isClicked ? "intro-in__text" : "intro-out__text"}>
          <Typography variant="h2">{data.intro.title}</Typography>
          <Typography variant="h4" fontWeight={'light'} mb={5} gutterBottom>{data.intro.subtitle}</Typography>
        </Box>
        <Button 
          variant={isClicked ? "contained" : "outlined"}
          color="primary" 
          size="large" 
          className={!isClicked ? "intro-in__button pulse" : "intro-out__button"}
          onClick={handleEnter}
          sx={{ borderRadius: 50 }}
        >
          {data.intro.enter_button}
        </Button>
      </Box>

      <Box 
        display={isClicked ? 'block' : 'none'}
        pt={isEnter ? 0 : '50vh'}
        overflow={'hidden'}
        sx={{
          transition: 'all 1.5s cubic-bezier(0.5, 0, 0, 1)',
          opacity: isEnter ? 1 : 0,
        }}
      >
        {children}
      </Box>

    </Box>
  );
}