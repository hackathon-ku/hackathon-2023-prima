import React from 'react'
import BackBtn from '../components/BackBtn'
import { Box, Stack , Grid} from '@mui/material'


function Subject() {


  return (
    <>
    <BackBtn/>
    <Stack spacing={3}>
        <div style={{textAlign:'center' , height: '20%', marginTop: '10%' }}>
            insert 
        </div>
        <Box>
            <div style={{textAlign:'right' , marginRight: '8%'}}>Filter</div>
        </Box>
    </Stack>
    <Stack position={'row'}>
    
    </Stack>

    
    </>
    
  )
}

export default Subject