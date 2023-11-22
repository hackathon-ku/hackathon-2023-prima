import { createTheme } from '@mui/material/styles';
import { React, useState } from 'react'
import Box from '@mui/system/Box';
import { DialogContent, Grid, Stack, Typography } from '@mui/material';
import Tabbar from '../components/Tabbar';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



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
  const img_path = './src/assets/catagories'
  const centeredTextStyle = { textAlign: 'center', };
  const homePageBackgroundStyle = {
    height: '100vh',// Make the page full screen
  }
  const textStyle = {
    color: '#fff'
  }
  const navigation = useNavigate()
  let [name, setName] = useState("Guest");
  return (
    <div style={homePageBackgroundStyle}>
      <Stack>
        <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor: '#104946'}}>
          <Stack margin='5%'>
            <Typography style={textStyle}>Hi,</Typography>
            <Typography style={textStyle}>{name}</Typography>
          </Stack>
          <AccountCircleIcon style={{color: 'white', fontSize: '40', margin: '5%'}}/>
        </Stack>
        <Box component="section" sx={{
          height: '100%',
          width: '100%',
          marginBottom: '60px',
        }
        }>
          <Stack spacing={6} style={{backgroundColor:'#104946'}}>
          <div style={{borderRadius: '25px 25px 0px 0px', backgroundColor: '#ffff'}}>
            <Grid>
              <div style={{ marginLeft: 25, marginTop: 20, marginBottom: 0, fontSize: 24 }}> Announce </div>
            </Grid>
            <Grid container justifyContent={'center'} style={{ marginTop: 20 }}  >
              <Box sx={{ display: 'flex', width: '90%', height: '120px', bgcolor: '#104946', borderRadius: '25px', top: '20px' }}>
                <img src={img_path + '/graduation.png'} width={'100%'} />
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
                  <img src={img_path + '/schedule.png'} style={{ width: '50%', height: 'auto' }} alt="Schedule Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>Class Schedule</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={img_path + '/map.png'} style={{ width: '50%', height: 'auto' }} alt="Map Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>KU Map</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={img_path + '/alert.png'} style={{ width: '50%', height: 'auto', marginBottom: 0 }} alt="Alert Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>KU Alert</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={img_path + '/activity-transcript.png'} style={{ width: '50%', height: 'auto' }} alt="activity Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>Activity Transcipt</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={img_path + '/planner.png'} style={{ width: '50%', height: 'auto' }} alt="Home Icon" />
                  <Typography style={{ centeredTextStyle, fontSize: 10 }}>KU Planner</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={img_path + '/more.png'} style={{ width: '50%', height: 'auto' }} alt="add more " />
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
                  <img src={img_path + '/swiming.png'} width={'100%'} />
                </Box>
                <Box sx={{ display: 'flex', width: '50%', height: '151px', bgcolor: '#104946', borderRadius: '25px', top: '20px' }}>
                  <img src={img_path + '/teaching.png'} width={'100%'} />
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