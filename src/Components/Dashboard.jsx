import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AddIcon from '@mui/icons-material/Add';
import CollegeTable from './CollegeTable';



const drawerWidth = 240;

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar className='bg-white flex justify-between items-center'>
            <div>
            <SearchIcon className='text-black cursor-pointer'/>
          <OutlinedInput className='h-10 w-56' placeholder='Search for college/admin'/>
            </div>
            <div className='flex items-center px-4'>
                <NotificationsOutlinedIcon className='text-black mx-3'/>
                <div className='bg-[#3269ff6e] p-2 rounded-lg'>
                    Admin
                </div>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
            <img src="" alt="" />
            <h1 className='text-3xl'>Logo</h1>
        </Toolbar>
        <List className='text-left m-2 '>
          {['Colleges', 'Raised Tickets', 'Team', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding className='hover:border-r-4 hover:border-r-[#3267FF]'>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <button className='text-left mx-4 my-2 text-red-600'>Log Out</button>
      </Drawer>
      <Box
        className='h-screen px-8 py-4'
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#f6f6f6' }}
      >
        <Toolbar/>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-3xl'>Colleges</h1>
            {/* <button className='text-white bg-[#3267FF] rounded-3xl p-2 items-center flex gap-2'><AddIcon/> Register New College</button> */}
        </div>
        <div className='text-[#7C8DB5] my-4'>
            <p>View and manage all  colleges in one place</p>
            <p>100colleges, 100students(aanalytics)</p>
        </div>
        <CollegeTable/>  
      </Box>
      
    </Box>
  );
}

