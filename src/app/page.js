import { Container, Typography, Button, Divider, Stack } from "@mui/material";
import { NorthEastRounded } from "@mui/icons-material";
import Link from "next/link";

export async function generateMetadata() {
  const title = "Resume Website";
  const description = "This is a resume website. Create your own resume website now!";
  const image_url = "https://firebasestorage.googleapis.com/v0/b/my-resume-website-ddda8.appspot.com/o/public%2Fthumbnail.jpg?alt=media&token=0231f8a1-43e5-4b37-a2b3-17c934b8a36f";
  const url = "https://themiddnight-resume.vercel.app/";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image_url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@themiddnight",
      images: image_url,
    },
  };
}

export default function Home() {
  return (
    <main>
      <Container sx={{ height: '100dvh' }}>
        <Stack direction='column' spacing={5} justifyContent='center' height='100%' divider={<Divider flexItem/>}>

          <Stack direction='column'>
            <Typography variant="h1" component="h1" fontWeight='bold' sx={{ fontSize: { xs: 56, sm: 96} }}>
              Greetings!
            </Typography>
            <Typography variant="h2" component="h2" lineHeight={1} gutterBottom sx={{ fontSize: { xs: 40, sm: 64} }}>
              This is a resume website.
            </Typography>
            <Typography variant="p" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate iusto quaerat enim impedit sit modi fuga, est illo, ducimus laboriosam, harum deserunt nostrum. Cumque, labore quasi. 
            </Typography>

          </Stack>

          <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
            <Link href="resumes/themiddnight-dev">
              <Button variant="contained" size='large'>View My Resume</Button>
            </Link>
            <Link href="/create">
              <Button variant='outlined' size='large' endIcon={<NorthEastRounded/>}>Create Yours</Button>
            </Link>
          </Stack>

        </Stack>
      </Container>
    </main>
  );
}
