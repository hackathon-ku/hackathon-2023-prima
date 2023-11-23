import React from 'react'
import Tabbar from '../components/Tabbar'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import alertImg from '../assets/catagories/alert.png'
import mapImg from '../assets/catagories/Map.png'
import plannerImg from '../assets/catagories/planner.png'
import activityImg from '../assets/catagories/activity-transcript.png'
import eventImg from '../assets/catagories/event.png'
import examImg from '../assets/catagories/exam.png'
import gradeImg from '../assets/catagories/grade.png'
import riImg from '../assets/catagories/ri.png'
import rpImg from '../assets/catagories/rp.png'
import libraryImg from '../assets/catagories/library.png'
import busImg from '../assets/catagories/bus.png'
import voteImg from '../assets/catagories/vote.png'
import checkInImg from '../assets/catagories/checkin.png'

function Catagories() {
    const centeredTextStyle = {
        textAlign: 'center',
        color: '#939090'
    };
    const navigation = useNavigate();

    return (
        <div style={{marginBottom: '15%'}}>
            <Stack style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 16, paddingTop: 10}}>
                <ArrowBackIosNewIcon onClick={() => { navigation("/") }} />
                <Typography>edit</Typography>
            </Stack>
            <Grid container rowSpacing={6} columnSpacing={{ xs: 2, sm: 3, md: 4 }} padding={0} mt={1}>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={eventImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>KU Event</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={examImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Exam Score</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={gradeImg}style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Grade</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={riImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Registration Information</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={rpImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Resgistration Report</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={libraryImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Library</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={busImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Ku Bus</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={voteImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Vote</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={checkInImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Check in</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/ActivityTranscript") }}>
                        <img src={activityImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Activity Transcript</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/Planner") }}>
                        <img src={plannerImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Ku Planner</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/Alert") }}>
                        <img src={alertImg} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                        <Typography style={centeredTextStyle}>Ku Alert</Typography>
                    </Box>
                </Grid>
            
            </Grid>
            <Tabbar />
        </div>
    )

}

export default Catagories