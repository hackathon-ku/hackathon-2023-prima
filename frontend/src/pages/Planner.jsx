import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BackBtn from '../components/BackBtn';

function Planner() {
  const navigation = useNavigate()
  return (
    <div>
      <BackBtn/>
    </div>
  )
}

export default Planner