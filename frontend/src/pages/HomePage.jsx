import { createTheme } from '@mui/material/styles';
import React from 'react'
import Box from '@mui/system/Box';
import { DialogContent, Grid, Stack } from '@mui/material';



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
})


function HomePage() {
    const img_path = './src/assets/catagories'

  return (
    <Box component="section" sx={{ 
        height: '750.74px',
        width: {
            xs:'390px',//0
            sm:'500px',//600
            md:'832px',//900
            lg:'1140px',//1200
        },
        bgcolor: '#ffffff',
        position: 'fixed',
        top: '473px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px 25px 0px 0px'
        }
        }>
        <Stack spacing={6}>
            <Grid>
                <div style={{marginLeft: 25, marginTop: 20, marginBottom: 0}}> Announce </div>
            </Grid>
            <Grid container justifyContent={'center'} style={{marginTop: 20}} >
                <Box sx={{width: '342px', height: '134px', bgcolor: '#104946', borderRadius: '25px', top:'20px'}}>

                </Box>
            </Grid>


        </Stack>

        <Stack>
            <div style = {{marginLeft: 25, marginTop: 20, }}> Catagories </div>
            <Grid container rowSpacing={6} columnSpacing={{xs:2 , sm:3, md:4}}>
               <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={img_path+'/schedule.png'} style={{ width: '60%', height: 'auto' }} alt="Home Icon" />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={img_path+'/map.png'} style={{ width: '40%', height: 'auto' }} alt="Home Icon" />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={img_path+'/activity-trans.png'} style={{ width: '50%', height: 'auto' }} alt="Home Icon" />
                    </Box>
                </Grid>
                
            </Grid>

        </Stack>
                     
    </Box>
  )
}

export default HomePage