    import { Box, Stack, Typography } from '@mui/material'
    import React from 'react'

    function SubjectCard({clr, subject_id, subject, time, place}) {
    return (
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '20px',
            backgroundColor: '#F5F5F5',
            marginLeft: '16px',
            marginRight: '16px',
            width: '90%',
            height: '100px',
            alignItems: 'center'
        }}>
            <Box sx={{width:'10%', borderRadius: '20px 0px 0px 20px', backgroundColor: clr, minHeight:'100%'}}></Box>
            <Typography sx={{width: '50%'}}>{subject_id} {subject}</Typography>
            <Stack sx={{width: '35%'}}>
            <Typography>{time}</Typography>
            <Typography>{place}</Typography>
            </Stack>
        </Stack>
    )
    }

    export default SubjectCard