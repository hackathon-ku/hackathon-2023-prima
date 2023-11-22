import React from 'react'
import Tabbar from '../components/Tabbar'
import { Box, Button, Grid, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom';

function Catagories() {
    const centeredTextStyle = {
        textAlign: 'center',
      };
    const navigation = useNavigate();

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 16}}>
                <Typography onClick={() => {navigation("/")}}>&lt;</Typography>
                <Typography>edit</Typography>
            </div>  
            <Grid container rowSpacing={6} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>KU Event</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Exam Score</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Grade</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Registration Information</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Resgistration Report</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Library</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Ku Bus</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Vote</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Check in</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Tabbar />
        </div>
    )
}

export default Catagories