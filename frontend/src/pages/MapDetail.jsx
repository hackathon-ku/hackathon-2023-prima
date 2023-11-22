import building from '../assets/703-2.jpg';
import pin from '../assets/564px-Map_pin_icon.svg.png';
import seven from '../assets/69986.png';
import dumbby from '../assets/1053916.png';
import parkky from '../assets/2343894.png';
import '../assets/styles/ku-map-header.css';
import '../assets/styles/ku-map.css';
import BackBtn from '../components/BackBtn';

function MapDetail() {
  const divStyle = {
    backgroundImage: `url(${building})`,
    backgroundSize: 'cover',
    width: '80vw',
    height: '40vh'
  };

  const pinPic = {
    backgroundImage: `url(${pin})`,
    backgroundSize: 'cover',
    width: '2vw',
    height: '2vh'
  };

  const seven11 = {
    backgroundImage: `url(${seven})`,
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
      <div id='forPic' style={divStyle}></div>
      <div id='forName'>
        <h2>อาคารวิทยาศาสตร์กายภาพ 45 ปี</h2>
      </div>
      <div id='forDes'>
        <h3>สิ่งอำนวยความสะดวก</h3>
        <ul>
          <li><div className='first' style={seven11}></div>7-11</li>
          <li><div className='first' style={park}></div>ที่จอดรถ</li>
          <li><div className='first' style={dumb}></div>Fitness</li>
        </ul>
      </div>
      <div id='forLink'>
          <div style={pinPic}></div>
          <a href="https://maps.app.goo.gl/F4qMfT5VE94Pu8MF9" target='_blank'>
            <h3>เปิดใน Google map</h3>
          </a>

      </div>
    </div>
    </>
  );
}



export default Map