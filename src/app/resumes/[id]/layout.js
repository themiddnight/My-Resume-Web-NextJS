import { Box, Divider, Typography, Button, Container } from "@mui/material"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <Box>
      {children}
      <Container maxWidth="xl">
        <Divider />
        <Box sx={{ py: 2 }}>
          <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }} justifyContent='space-between' alignItems={'center'} gap={2}>

            <Box display='flex' alignItems={'center'} gap={1}>
              <Link href='/' passHref>
                <Button variant="text" color="primary" size="small" sx={{ px: 2 }}>Home</Button>
              </Link>
              <Divider orientation="vertical" flexItem />
              <Link href='/create' passHref>
                <Button variant="text" color="primary" size="small" sx={{ px: 2 }}>Create Yours</Button>
              </Link>
            </Box>

            <Typography variant="body2" color="textSecondary" align="center">
              © {new Date().getFullYear()} Pathompong Thitithan. All rights reserved.
            </Typography>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}