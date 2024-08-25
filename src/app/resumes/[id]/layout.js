import { Box, Divider, Typography, Button, Container } from "@mui/material"
import { HomeRounded, DriveFileRenameOutlineRounded } from "@mui/icons-material"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Container maxWidth="xl" component='footer'>
        <Divider />
        <Box sx={{ py: 2 }}>
          <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems={'center'} gap={2}>

            <Box display='flex' alignItems='center' gap={2}>
              <Typography color="textSecondary" align="center">
                themiddnight-resume
              </Typography>

              <Divider orientation="vertical" flexItem />

              <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'start', sm: 'center' }} columnGap={1}>
                <Link href='/' passHref>
                  <Button variant="text" color="primary" size="small" startIcon={<HomeRounded/>} sx={{ px: 2 }}>Home</Button>
                </Link>

                <Link href='https://themiddnight.github.io/#/create' passHref target="_blank">
                  <Button variant="text" color="primary" size="small" startIcon={<DriveFileRenameOutlineRounded/>} sx={{ px: 2 }}>Create Yours</Button>
                </Link>
              </Box>
            </Box>

            <Typography variant="body2" color="textSecondary" align="center">
              © {new Date().getFullYear()} Pathompong Thitithan. All rights reserved.
            </Typography>

          </Box>
        </Box>
      </Container>
    </>
  )
}