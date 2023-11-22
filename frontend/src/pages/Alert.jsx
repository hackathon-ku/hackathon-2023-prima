import React from 'react'
import Tabbar from '../components/Tabbar'
import { useNavigate } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

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
                    flexDirection: "column",
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
                        mt: '3%',
                        '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#104946',
                                },
                            },
                        }} InputLabelProps={{
                            style: {
                                color: 'grey',
                            }
                        }}
                    />
                </Box>
                <Box>
                    <Typography>รายละเอียดเหตุการณ์</Typography>
                    <TextField id="outlined-basic" label="รายละเอียด" variant="outlined" sx={{
                            width: '100%',
                            mt: '3%',
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#104946',
                                },
                            },
                        }} InputLabelProps={{
                            style: {
                                color: 'grey',
                            }
                        }}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <Button sx={{
                    backgroundColor: '#229c96',
                    color: '#ffff',
                    width: '20%',
                    marginLeft: 'auto'
                    }}>Submit</Button>
                </Box>
            </Stack>
            <Tabbar />
        </div>
    )
}

export default Alert