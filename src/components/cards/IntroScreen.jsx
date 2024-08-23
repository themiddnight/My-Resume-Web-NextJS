'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function IntroScreen ({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isEnter, setIsEnter] = useState(false);

  const handleEnter = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsEnter(true);
    }, 500);
  }

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    }

    if (!isEnter) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isEnter]);

  return (
    <Box
      width={'100%'}
      mb={isEnter ? '0' : '50%'}
      height={isEnter ? '0vh' : '100dvh'}
      display={'flex'}
      overflow={'hidden'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      className={"basic-bg"}
      sx={{
        transition: 'all 2s cubic-bezier(0.5, 0, 0, 1)',
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
  );
}