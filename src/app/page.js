import { Container, Typography, Button, Divider, Stack, Box, Chip } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { NorthEastRounded } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const FigmaIcon = () => (
    <Image src="/icons/figma.svg" alt="Figma" width={16} height={16} />
  );

  return (
    <Box component={'main'} height={'100dvh'} width={'100vw'} overflow={'hidden'}>
      <Image 
        src="/images/hero_bg_simplify.webp" 
        alt="background" 
        layout="fill"
        style={{ 
          width: '100%', 
          height: '100%',
          objectFit: 'cover', 
          opacity: 0.2,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        }}
      />
      <Container sx={{ height: '100%', position: 'relative' }}>
        <Stack direction='column' spacing={3} justifyContent='center' height='100%' divider={<Divider flexItem className="card6"/>}>

          <Stack direction='column'>
            <Typography variant="h1" component="h1" fontWeight='bold' sx={{ fontSize: { xs: 56, sm: 96} }} className="card1">
              Greetings!
            </Typography>
            <Typography variant="h2" component="h2" lineHeight={1} gutterBottom sx={{ fontSize: { xs: 40, sm: 64} }} className="card2">
              Welcome to the Resume Builder
            </Typography>
            <Typography variant="p" component="p" gutterBottom className="card3">
              This is a website where you can create your own resume website. And my personal project to study fullstack development.
            </Typography>
            <Typography variant="p" component="p" gutterBottom className="card3">
              Developed with Next.js, Material-UI, and Firebase as a backend.
            </Typography>

            <Box display='flex' flexWrap={'wrap'} gap={1} pt={2} className='card4'>
              <Chip label="Figma" component='a' href="https://www.figma.com/file/jBEeCe4uuuPFp8thrfu1c8/resume-web?type=design&node-id=0-1&mode=design" size="small" clickable icon={<FigmaIcon/>} />
              <Chip label="GitHub (Front-End)" component='a' href="https://github.com/themiddnight/My-Resume-Web-NextJS" size="small" clickable icon={<GitHub/>} />
              <Chip label="GitHub (Back-End)" component='a' href="https://github.com/themiddnight/My-Resume-Web-API-Firebase" size="small" clickable icon={<GitHub/>} />
            </Box>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'start' }} spacing={2} className="card5">
            <Link href="resumes/themiddnight-dev">
              <Button variant="contained" size='large'>View My Resume</Button>
            </Link>
            <Link href="https://themiddnight.github.io/#/create" target="_blank">
              <Button variant='outlined' size='large' endIcon={<NorthEastRounded/>}>Create Yours</Button>
            </Link>
          </Stack>

        </Stack>
      </Container>
    </Box>
  );
}
