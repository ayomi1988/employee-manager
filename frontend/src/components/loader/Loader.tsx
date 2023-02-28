import { Box, LinearProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <LinearProgress sx={{ width: '100%'}} />
    </Box>
   
  );
};

export default Loader;