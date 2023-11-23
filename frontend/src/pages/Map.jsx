import React from 'react'
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
  const image_path = '../assets/A-marker.png'
  const markerData = [
      {x: 630, y: 220},
      
    ];


  return (
    <>
      <BackBtn/>
      <SearchBar/>
      <Box sx={{position:'relative',display:'flex', width:'100%',height:'100%' , overflowX:'auto', overflowY:'auto' , marginTop:'5%', padding:'25%'}}>
        <img src={MapImage} alt="Map.png" height='500px' width= '1000' />
        {markerData.map((data, index) => (
        <Marker key={index} position={data} imageSrc={data.imageSrc} />
      ))}
      </Box>
  
      <Tabbar/>
    </>

  )
}

export default Map