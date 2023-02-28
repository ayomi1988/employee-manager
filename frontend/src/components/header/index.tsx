import React from 'react'
import {AppBar, Box, Toolbar} from '@mui/material';
import SearchAppBar from './Search'
import TitleBar from './TitleBar'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Toolbar sx={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
         <TitleBar />
        <SearchAppBar />     
    </Toolbar>
    </AppBar>
  </Box>
  )
}
