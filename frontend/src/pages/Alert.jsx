import React from 'react'
import Tabbar from '../components/Tabbar'
import { useNavigate } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import { Box, Stack, TextField, Typography } from '@mui/material';

import photoImg from '../assets/photo.png';

function Alert() {
    return (
        <div>
            <BackBtn />
            <Stack sx={{
                padding: '20px',
                rowGap: 2
            }}>
                <Box sx={{
                    bgcolor: '#D9D9D9',
                    borderRadius: '20px',
                    padding: '20px',
                    display: "flex",
                    justifyContent: "center",   
                    alignItems: "center",
                    minHeight: "300px",
                }}>
                    <img src={photoImg} style={{ width: '15%', height: 'auto' }}></img>
                    <Typography>Add picture</Typography>
                </Box>
                <Box>
                    <Typography>สถานที่เกิดเหตุ</Typography>
                    <TextField id="outlined-basic" label="ระบุสถานที่" variant="outlined" sx={{
                        width: '100%',
                        borderRadius: '20px'
                    }} />
                </Box>
                <Box>
                    <Typography>รายละเอียดเหตุการณ์</Typography>
                    <TextField id="outlined-basic" label="รายละเอียด" variant="outlined" sx={{
                        width: '100%',
                        borderRadius: '20px'
                    }}/>
                </Box>
            </Stack>
            <Tabbar />
        </div>
    )
}

export default Alert