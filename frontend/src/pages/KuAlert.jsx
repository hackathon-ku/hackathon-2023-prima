import React, { useState } from 'react'
import Tabbar from '../components/Tabbar'
import { useNavigate } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import { Alert, AlertTitle, Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import photoImg from '../assets/photo.png';
import TxtField from '../components/TxtField';

function KuAlert() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    
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
                    <TxtField label="ระบุสถานที่" />
                </Box>
                <Box>
                    <Typography>รายละเอียดเหตุการณ์</Typography>
                    <TxtField label="รายละเอียด" />
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
                    }} onClick={handleClickOpen}>Submit</Button>
                </Box>

            </Stack>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
            <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
            <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    ข้อมูลได้ถูกส่งให้หน่วยงานที่เกี่ยวข้องเรียบร้อยแล้ว
                </Alert>
            </Dialog>
            <Tabbar />
        </div>
    )
}

export default KuAlert