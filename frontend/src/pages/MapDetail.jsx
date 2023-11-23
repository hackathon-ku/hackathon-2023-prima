import building from '../assets/703-2.jpg';
import pinIcon from '../assets/564px-Map_pin_icon.svg.png';
import sevenEleven from '../assets/69986.png';
import dumbby from '../assets/1053916.png';
import parkky from '../assets/2343894.png';
import '../assets/styles/ku-map.css';
import BackBtn from '../components/BackBtn';
import '../assets/styles/map-detail.css';

function MapDetail() {
  const divStyle = {
    backgroundImage: `url(${building})`,
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

  const sevenElevenIconStyle = {
    backgroundImage: `url(${sevenEleven})`,
    backgroundSize: 'cover',
    width: '7vw',
    height: '7vw'
  }

  const dumb = {
    backgroundImage: `url(${dumbby})`,
    backgroundSize: 'cover',
    width: '7vw',
    height: '7vw'
  }

  const park = {
    backgroundImage: `url(${parkky})`,
    backgroundSize: 'cover',
    width: '7vw',
    height: '7vw'
  }

  return (
    <>
    <BackBtn/>
    <div id='container'>
      <h1>KU Map</h1>
      <div id='forPic' style={divStyle}></div>
      <div id='forName'>
        <h2>อาคารวิทยาศาสตร์กายภาพ 45 ปี</h2>
      </div>
      <div id='forDes'>
        <h3>สิ่งอำนวยความสะดวก</h3>
        <ul>
          <li><div className='first' style={sevenElevenIconStyle}></div>7-11</li>
          <li><div className='first' style={park}></div>ที่จอดรถ</li>
          <li><div className='first' style={dumb}></div>Fitness</li>
        </ul>
      </div>
      <div id='forLink'>
          <div style={pinIconStyle}></div>
          <a href="https://maps.app.goo.gl/F4qMfT5VE94Pu8MF9" target='_blank'>
            <h3>เปิดใน Google map</h3>
          </a>

      </div>
    </div>
    </>
  );
}



export default MapDetail