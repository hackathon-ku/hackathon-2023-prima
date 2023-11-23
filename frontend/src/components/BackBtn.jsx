import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function BackBtn({path}) {
    const navigation = useNavigate()
    path = path ? path:"/";
    return (
        <div style={{ backgroundColor: '#104946' }}>
            <ArrowBackIosNewIcon onClick={() => { navigation(path) }} sx={{
                pt: '10px',
                margin: '16px',
                paddingTop: '10px',
                color: '#fff'
            }} />
        </div>
    )
}

export default BackBtn