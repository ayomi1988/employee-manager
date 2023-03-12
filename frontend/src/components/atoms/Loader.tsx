import { Box, LinearProgress } from '@mui/material';

export default function Loader ()   {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <LinearProgress color="success" sx={{ width: '100%'}} />
    </Box>   
  )
}