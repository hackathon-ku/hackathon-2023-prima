import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import Schedule from '../components/Schedule';

function Planner() {
  const navigation = useNavigate()
  return (
    <div>
      <BackBtn/>
    </div>
  )
}

export default Planner