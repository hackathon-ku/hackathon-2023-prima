import React from 'react'
import Tabbar from '../components/Tabbar'
import { Stack, Typography, CircularProgress, Box, Grid, LinearProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import uniActImg from '../assets/uni-act.png';
import abilityImg from '../assets/ability-act.png';
import socActImg from '../assets/soc-act.png';
import BackBtn from '../components/BackBtn';

function ActivityTranscript() {
    const centeredTextStyle = {
        textAlign: 'center',
    };
    const rightTextStyle = {
        textAlign: 'right',
        fontSize: 'smaller',
        color: '#919191',
        paddingTop: '5px',
    };
    const linearBarStyle = {
        width: '100%', // กำหนดความกว้างเต็มหน้าจอ
        height: 20, // กำหนดความสูงของ ProgressBar
        borderRadius: 10,
        backgroundColor: '#fff'
    };
    const navigation = useNavigate();
    return (
        <div>
            <BackBtn/>
            <Stack direction='column' spacing={3}
            >
                <Typography variant='h4' style={centeredTextStyle}>Activity Transcript</Typography>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <CircularProgress variant="determinate" value={75} size="50%" thickness={5} style={{ color: '#229c96', borderRadius: '25px' }} />
                    <Typography position='absolute' variant='h4' style={{ color: '#104946' }}>{75}%</Typography>
                </Box>
                <Stack rowGap={5} padding='20px'>
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F0EAE7', borderRadius: '20px' }} direction="row" columnGap={1}>
                        <img src={uniActImg} style={{ width: '30%', height: 'auto' }} />
                        <Stack sx={{width: '60%'}}>
                            <Typography style={centeredTextStyle}>กิจกรรมมหาวิทยาลัย</Typography>
                            <LinearProgress variant="determinate" value={75} sx={{
                                '& .MuiLinearProgress-bar1Determinate': {
                                    backgroundColor: '#186A67',
                                }
                            }} style={linearBarStyle} />
                            <Typography style={rightTextStyle}>ไม่น้อยกว่า 3 กิจกรรม</Typography>
                        </Stack>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F0EAE7', borderRadius: '20px' }} direction="row" columnGap={1}>
                        <img src={abilityImg} style={{ width: '30%', height: 'auto' }} />
                        <Stack sx={{width: '60%'}}>
                            <Typography style={centeredTextStyle}>กิจกรรมเพื่อเสริมสร้างสมถนะ</Typography>
                            <LinearProgress variant="determinate" value={75} style={linearBarStyle} sx={{
                                '& .MuiLinearProgress-bar1Determinate': {
                                    backgroundColor: '#186A67',
                                }
                            }} />
                            <Typography style={rightTextStyle}>ไม่น้อยกว่า 4 กิจกรรม</Typography>
                        </Stack>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F0EAE7', borderRadius: '20px' }} direction="row" columnGap={1}>
                        <img src={socActImg} style={{ width: '30%', height: 'auto' }} />
                        <Stack sx={{width: '60%'}}>
                            <Typography style={centeredTextStyle}>กิจกรรมเพื่อสังคม</Typography>
                            <LinearProgress variant="determinate" value={75} style={linearBarStyle} sx={{
                                '& .MuiLinearProgress-bar1Determinate': {
                                    backgroundColor: '#186A67',
                                }
                            }} />
                            <Typography style={rightTextStyle}>ไม่น้อยกว่า 3 กิจกรรม</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
            <Tabbar />
        </div>
    )
}   

export default ActivityTranscript