import React, { useEffect, useRef, useState } from 'react'
import Tabbar from '../components/Tabbar'
import BackBtn from '../components/BackBtn'
import SearchBar from '../components/SearchBar'
import MapDetail from './MapDetail'
import { Box,  } from '@mui/material'
import MapImage from '../assets/Map.png'
import Marker from '../components/Marker'
import { useNavigate, useNavigation } from 'react-router-dom';



function Map() {
  const navigation = useNavigate()
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [coord, setCoord] = useState([]);

  var markerData = []
  function getWindowSize(){
    return [window.innerHeight, window.innerWidth];
  }

  useEffect(() => {
    setWindowSize(getWindowSize());
  }, [windowSize])

  useEffect(() => {
    if((windowSize[1] <= 400)){
      setCoord ([
        {x: 650, y: 230}, // IE
        {x: 750, y: 500}, // ศร.1
        {x: 420, y: 130}, // BA4
  
      ]);
    }
    else if (windowSize[1] <= 600) {
      setCoord([
        {x: 690, y: 270}, // IE
        {x: 820, y: 570}, // ศร.1
        {x: 480, y: 190}, // BA4
  
      ]);
    }

    else if (windowSize[1] <= 800){
      setCoord([
        {x: 750, y: 330}, // IE
        {x: 850, y: 600}, // ศร.1
        {x: 530, y: 240}, // BA4
  
      ])
    }
    else if (windowSize[1] <= 1000){
      setCoord([
        {x: 810, y: 390}, // IE
        {x: 910, y: 670}, // ศร.1
        {x: 580, y: 290}, // BA4
  
      ])
    }
    else if (windowSize[1] <= 1300){
      setCoord([
        {x: 860, y: 450}, // IE
        {x: 960, y: 730}, // ศร.1
        {x: 640, y: 350}, // BA4
  
      ])
    }
  

    else if(windowSize[1] > 1300){ //FULLSCREEN
      setCoord([
        {x:880, y:465},
        {x:975, y:740},
        {x:650, y:370},
  
      ])
    }

  }, [coord])



 
  


  return (
    <>
      <BackBtn/>
      <SearchBar/>
      <Box sx={{position:'relative',display:'flex', width:'100%',height:'100%' , overflowX:'auto', overflowY:'auto' , marginTop:'5%', padding:'25%'}}>
        <img src={MapImage} alt="Map.png" height='500px' width= '1000' />
        {coord.map((data, index) => (
        <Marker key={index} position={data}/>
      ))}
      </Box>
  
      <Tabbar/>
    </>

  )
}

export default Map