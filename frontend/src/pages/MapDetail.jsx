import lh1Img from '../assets/lh1.png';
import ieImg from '../assets/ie.png';
import ba4Img from '../assets/ba4.png';
import pinIcon from '../assets/564px-Map_pin_icon.svg.png';
import '../assets/styles/ku-map.css';
import BackBtn from '../components/BackBtn';
import '../assets/styles/map-detail.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MapDetail() {
  const [kuMap, setMap] = useState([])
  const {id} = useParams();
  const [facility, setFacility] = useState([])
  const [mainName, setMainName] = useState("")
  useEffect(()=>  {
    axios.get(`http://localhost:5001/maps?id=${id}`).then((res) => {
      setMap(res.data);
      setFacility(res.data['facility']);
      setMainName(res.data['name'])
    });
  },[])
  const picMap = new Map();
  picMap.set('ieImg', ieImg)  
  picMap.set('lh1Img', lh1Img)  
  picMap.set('ba4Img', ba4Img)  
  const divStyle = {
    backgroundImage: `url(${picMap.get(kuMap._img)})`,
    backgroundSize: 'cover',
    width: '80vw',
    height: '40vh'
  };

  const pinIconStyle = {
    backgroundImage: `url(${pinIcon})`,
    backgroundSize: 'cover',
    width: '2vw',
    height: '2vh'
  };



  return (
    <>
    <BackBtn path="/pages/Map"/>
    <div id='container'>
      <h1>KU Map</h1>
      <div id='forPic' style={divStyle}></div>
      <div id='forName'>
        <h2>{mainName}</h2>
      </div>
      <div id='forDes'>
        <h3>สิ่งอำนวยความสะดวก</h3>
        <ul>
          {facility.map((element, index) => (
             <li key={index}>{element}</li>))
          }
        </ul>
      </div>
      <div id='forLink'>
          <div style={pinIconStyle}></div>
          <a href={kuMap.link} target='_blank'>
            <h3>เปิดใน Google map</h3>
          </a>

      </div>
    </div>
    </>
  );
}



export default MapDetail