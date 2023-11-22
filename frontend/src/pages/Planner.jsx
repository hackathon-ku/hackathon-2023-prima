import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Planner() {
  const navigation = useNavigate()
  return (
    <div>
      <ArrowBackIosNewIcon onClick={() => { navigation("/pages/Catagories") }} sx={{
                pt: '10px'
            }} />
    </div>
  )
}

export default Planner