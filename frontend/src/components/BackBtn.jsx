import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function BackBtn() {
    const navigation = useNavigate()
    return (
        <div style={{backgroundColor: '#104946'}}>
            <ArrowBackIosNewIcon onClick={() => { navigation("/pages/Catagories") }} sx={{
                pt: '10px',
                margin: '16px',
                paddingTop: '10px',
                color: '#fff'
            }} />
        </div>
    )
}

export default BackBtn