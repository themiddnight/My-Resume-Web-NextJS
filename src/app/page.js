import { Container, Typography, Button, Divider, Stack, Box, Chip, Avatar } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { NorthEastRounded } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container  sx={{ height: '100dvh', overflow: 'hidden' }}>
        <Box 
          position={'absolute'} 
          top={'50%'}
          left={'33%'} 
          width={'100%'}
          height={'80dvh'}
          zIndex={-1}
          borderRadius={'20px 0 0 20px'}
          overflow={'hidden'}
          sx={{
            transform: 'translateY(-50%)',
          }}
        >
          <Image 
            src="/images/hero_bg_simplify.webp" 
            alt="background" 
            layout="fill"
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover', 
              opacity: 0.2,
            }}
          />
        </Box>
          <Stack direction='column' spacing={3} justifyContent='center' height='100%' divider={<Divider flexItem/>}>

            <Stack direction='column'>
              <Typography variant="h1" component="h1" fontWeight='bold' sx={{ fontSize: { xs: 56, sm: 96} }}>
                Greetings!
              </Typography>
              <Typography variant="h2" component="h2" lineHeight={1} gutterBottom sx={{ fontSize: { xs: 40, sm: 64} }}>
                Welcome to the Resume Builder
              </Typography>
              <Typography variant="p" component="p">
                This is a website where you can create your own resume website. And my personal project to study fullstack development.
              </Typography>
              <Typography variant="p" component="p">
                Developed with Next.js, Material-UI, and Firebase as a backend.
              </Typography>

              <Stack mt={3} direction='row' spacing={1}>
                <Chip label="Figma" component='a' href="https://www.figma.com/file/jBEeCe4uuuPFp8thrfu1c8/resume-web?type=design&node-id=0-1&mode=design" size="small" clickable avatar={<Avatar src="icons/figma.svg"/>} />
                <Chip label="GitHub (Front-End)" component='a' href="https://github.com/themiddnight/My-Resume-Web-NextJS" size="small" clickable icon={<GitHub/>} />
                <Chip label="GitHub (Back-End)" component='a' href="https://github.com/themiddnight/My-Resume-Web-API-Firebase" size="small" clickable icon={<GitHub/>} />
              </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'start' }} spacing={2}>
              <Link href="resumes/themiddnight-dev">
                <Button variant="contained" size='large'>View My Resume</Button>
              </Link>
              <Link href="https://themiddnight.github.io/#/create" target="_blank">
                <Button variant='outlined' size='large' endIcon={<NorthEastRounded/>}>Create Yours</Button>
              </Link>
            </Stack>

          </Stack>
      </Container>
    </main>
  );
}
