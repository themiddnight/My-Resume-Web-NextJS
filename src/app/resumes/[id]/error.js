'use client' // Error boundaries must be Client Components
 
import { Box, Button } from '@mui/material'
import Link from 'next/link'
 
export default function Error({ error, reset }) {
 
  return (
    <Box 
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='100dvh'
    >
      <h2>Something went wrong!</h2>
      <Button LinkComponent={Link} href='/'>Go back to home</Button>
    </Box>
  )
}