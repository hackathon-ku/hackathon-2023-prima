  import React, { useEffect, useRef, useState } from 'react'
  import Tabbar from '../components/Tabbar'
  import BackBtn from '../components/BackBtn'
  import SearchBar from '../components/SearchBar'
  import MapDetail from './MapDetail'
  import { Box, TextField, } from '@mui/material'
  import MapImage from '../assets/Map.png'
  import Marker from '../components/Marker'
  import { useNavigate, useNavigation } from 'react-router-dom';
  import InputAdornment from '@mui/material/InputAdornment';
  import SearchIcon from '@mui/icons-material/Search';
  import axios from 'axios'



  function Map() {
    const navigation = useNavigate()
    const [data, setData] = useState({});
    const [id, setId] = useState(0);
    let num = 0;

    const handleSearchSubmit = () => {
        fetchData().then(() => {navigation(`/pages/MapDetail/${num}`);})
    };
  
    const fetchData = async () => {
      try {
        await axios.get(`http://localhost:5000/maps/name?name=${txt}`).then(function (res) {
          const responseData = res.data;
          num = parseInt(responseData.id);
          console.log(num)
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // rethrow the error so that the calling function can handle it
      }
    };
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [coord, setCoord] = useState([]);

    var markerData = []
    function getWindowSize(){
      return [window.innerHeight, window.innerWidth];
    }

    const [txt,setTxt] = useState('');
  

    useEffect(() => {
      setWindowSize(getWindowSize());
    }, [windowSize])

    useEffect(() => {
      if((windowSize[1] <= 400)){
        setCoord ([
          {x: 650, y: 230, id: 1}, // IE
          {x: 750, y: 500, id: 2}, // ศร.1
          {x: 420, y: 130, id: 3}, // BA4

        ]);
      }
      else if (windowSize[1] <= 600) {
        setCoord([
          {x: 690, y: 270, id: 1}, // IE
          {x: 820, y: 570, id: 2}, // ศร.1
          {x: 480, y: 190, id: 3}, // BA4

        ]);
      }

      else if (windowSize[1] <= 800){
        setCoord([
          {x: 750, y: 330, id: 1}, // IE
          {x: 850, y: 600, id: 2}, // ศร.1
          {x: 530, y: 240, id: 3}, // BA4

        ])
      }
      else if (windowSize[1] <= 1000){
        setCoord([
          {x: 810, y: 390, id: 1}, // IE
          {x: 910, y: 670, id: 2}, // ศร.1
          {x: 580, y: 290, id: 3}, // BA4

        ])
      }
      else if (windowSize[1] <= 1300){
        setCoord([
          {x: 860, y: 450, id: 1}, // IE
          {x: 960, y: 730, id: 2}, // ศร.1
          {x: 640, y: 350, id: 3}, // BA4

        ])
      }


      else if(windowSize[1] > 1300){ //FULLSCREEN
        setCoord([
          {x:880, y:465, id: 1},
          {x:975, y:740, id: 2},
          {x:650, y:370, id: 3},

        ])
      }

    }, [coord])

    return (
      <>
        <BackBtn />
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <TextField 
        id="input-with-icon-textfield"
        label="ค้นหา"
        value={txt}
        onChange={(event) => setTxt(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon onClick={handleSearchSubmit} />
            </InputAdornment>
          ), sx: { borderRadius: 25}
        }}
        variant="outlined"
      />
        </div>
        <Box sx={{position:'relative',display:'flex', width:'100%',height:'100%' , overflowX:'auto', overflowY:'auto' , marginTop:'5%', padding:'25%'}}>
          <img src={MapImage} alt="Map.png" height='500px' width= '1000' />
          {coord.map((data, index) => (
          <Marker key={index} data={data}/>
        ))}
        </Box>

        <Tabbar />
      </>

    )
  }

  export default Map    