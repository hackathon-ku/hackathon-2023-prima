import { createTheme } from '@mui/material/styles';
import { React, useEffect, useState } from 'react'
import Box from '@mui/system/Box';
import { Button, Dialog, DialogContent, Grid, Stack, TextField, Typography } from '@mui/material';
import Tabbar from '../components/Tabbar';
import { useNavigate, useParams } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

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
import gdaImg from '../assets/catagories/graduation.png'
import moreImg from '../assets/catagories/more.png'
import swmImg from '../assets/catagories/swiming.png'
import teachImg from '../assets/catagories/teaching.png'


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#104946',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Montserrat'
    ].join(','),
  }
})


function HomePage() {
  const centeredTextStyle = { textAlign: 'center', };
  const [id , setId] = useState("");
  const [student, setStudent] = useState([]);
  const [open, setOpen] = useState(false);
  const [std, setStd] = useState("");
  const [pwd, setPwd] = useState("");
  const homePageBackgroundStyle = {
    height: '100vh',// Make the page full screen
  }
  const textStyle = {
    color: '#fff'
  }
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('access_token'));
  });
  async function handleSubmit() {
    const token = await axios.post('http://localhost:5000/login', {
      "student_id": std,
      "password": pwd
    });
    console.log(token.data);
    window.localStorage.setItem("access_token", JSON.stringify(token.data));
    setOpen(false);
  }
  const navigation = useNavigate();
  let data = {first_name: 'Guest'};
  if (window.localStorage.getItem('access_token')){
    data = JSON.parse(window.localStorage.getItem('access_token'));
  }
  // const data = JSON.parse(window.localStorage.getItem('access_token') || {'first_name': 'Guest'});
  const name = data['first_name'];
  useEffect(() => {
    axios.get(`http://localhost:5000/students/id?id=${id}`).then((res) => {
      setStudent(res.data);
      // setName(res.data.first_name)
    });
  }, []);
  return (
    <div style={homePageBackgroundStyle}>
    <Dialog open= {open} onClose = {() => {setOpen(false)}}>
      <DialogContent>
        <Stack spacing={2} justifyContent={'center'}>
          <TextField label = "student id" onChange={(e) => {setStd(e.target.value)}}></TextField>
          <TextField label = "password" type='password' onChange={(e) => {setPwd(e.target.value)}}></TextField>
          <Stack direction={'row'}>
            <Button variant='contained' onClick={() => {setOpen(false)}}>Back</Button>
            <Button varaint = 'contained' onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Stack>
      </DialogContent> 
    </Dialog>
      <Stack>
        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#104946' }}>
          <Stack margin='5%'>
            <Typography style={textStyle}>Hi,</Typography>
            <Typography style={textStyle}>{name}</Typography>
          </Stack>
          {!window.localStorage.getItem("access_token") ? <LoginIcon style={{ color: 'white', fontSize: '40', margin: '5%' }} onClick={() => { setOpen(true) }}/> : <LogoutIcon style={{ color: 'white', fontSize: '40', margin: '5%' }} onClick= {() => {window.localStorage.clear(); window.location.reload()}} />}
        </Stack>
        <Box component="section" sx={{
          height: '100%',
          width: '100%',
          marginBottom: '60px',
        }
        }>
          <Stack spacing={6} style={{ backgroundColor: '#104946' }}>
            <div style={{ borderRadius: '25px 25px 0px 0px', backgroundColor: '#ffff' }}>
              <Grid>
                <div style={{ marginLeft: 25, marginTop: 20, marginBottom: 0, fontSize: 24 }}> Announce </div>
              </Grid>
              <Grid container justifyContent={'center'} style={{ marginTop: 20 }}  >
                <Box sx={{ display: 'flex', width: '90%', height: '120px', bgcolor: '#104946', borderRadius: '25px', top: '20px' }}>
                  <img src={gdaImg} width={'100%'} />
                  <img src={gdaImg} width={'100%'} />
                </Box>
              </Grid>
            </div>

          </Stack>

          <Stack>

            <Stack direction={'row'}>
              <div style={{ marginLeft: 25, marginTop: 20, fontSize: 24 }}> Catagories </div>
              <div style={{ position: 'absolute', marginLeft: '85%', marginTop: 25, fontSize: 12 }}> <a onClick={() => { navigation("/pages/Catagories") }}>more</a> </div>
            </Stack>


            <Grid container rowSpacing={6} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={examImg} style={{ width: '50%', height: 'auto' }} alt="Schedule Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>Class Schedule</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/Map") }}>
                  <img src={mapImg} style={{ width: '50%', height: 'auto' }} alt="Map Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>KU Map</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/Alert") }}>
                  <img src={alertImg} style={{ width: '50%', height: 'auto', marginBottom: 0 }} alt="Alert Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>KU Alert</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/ActivityTranscript") }}>
                  <img src={activityImg} style={{ width: '50%', height: 'auto' }} alt="activity Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>Activity Transcipt</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => { navigation("/pages/Planner") }}>
                  <img src={plannerImg} style={{ width: '50%', height: 'auto' }} alt="Home Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>KU Planner</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={moreImg} style={{ width: '50%', height: 'auto' }} alt="add more " />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>Add more Schedule</Typography>
                </Box>
              </Grid>

            </Grid>

          </Stack>

          <Stack>
            <Grid>
              <div style={{ marginLeft: 25, marginTop: 20, fontSize: 24 }}> News & Activity</div>
            </Grid>

            <Grid >
              <Stack direction={'row'} spacing={2} sx={{ margin: '5%' }}>
                <Box sx={{ display: 'flex', width: '50%', height: '151px', bgcolor: '#104946', borderRadius: '25px', top: '20px' }}>
                  <img src={swmImg} width={'100%'} />
                </Box>
                <Box sx={{ display: 'flex', width: '50%', height: '151px', bgcolor: '#104946', borderRadius: '25px', top: '20px' }}>
                  <img src={teachImg} width={'100%'} />
                </Box>
              </Stack>
            </Grid>
          </Stack>
        </Box>
        <Tabbar />
      </Stack>
    </div>
  )
}

export default HomePage