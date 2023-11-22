import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Stack, Toolbar, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

//import picture
import homeImg from '../assets/home.png'
import cardImg from '../assets/card.png'
import noticeImg from '../assets/notice.png'
import servicesImg from '../assets/services.png'

function Tabbar() {
  const navigation = useNavigate();
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#104946' }}>
      <Toolbar>
        <Stack direction='row' spacing={6} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => {navigation("/")}}>
            <img src={homeImg} style={{ width: '24px', height: '24px' }} alt="Home Icon" />
            <Typography>Home</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => {navigation("/pages/Catagories")}}>
            <img src={cardImg} style={{ width: '24px', height: '24px' }} alt="Card Icon" />
            <Typography>Card</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={noticeImg} style={{ width: '24px', height: '24px' }} alt="Notice Icon" />
            <Typography>Notice</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={servicesImg} style={{ width: '24px', height: '24px' }} alt="Services Icon" />
            <Typography>Services</Typography>
          </div>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Tabbar;
