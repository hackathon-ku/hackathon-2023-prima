import React from 'react'
import Tabbar from '../components/Tabbar'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Catagories() {
    const centeredTextStyle = {
        textAlign: 'center',
    };
    const navigation = useNavigate();

    return (
        <>
            <Stack style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 16, paddingTop: 10}}>
                <ArrowBackIosNewIcon onClick={() => { navigation("/") }} />
                <Typography>edit</Typography>
            </Stack>

            <Grid container rowSpacing={6} columnSpacing={{ xs: 2, sm: 3, md: 4 }} padding={0} mt={1}>
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
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/ActivityTranscript") }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Activity Transcript</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/Planner") }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Ku Planner</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/Alert") }}>
                        <img src='https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png' style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Ku Alert</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Tabbar />
        </>
    )

}

export default Catagories