import { React, useEffect, useState }from 'react'
import { useNavigate } from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import { Box, Stack, Table, Typography } from '@mui/material';
import Tabbar from '../components/Tabbar';
import SubjectCard from '../components/SubjectCard';
import Axios from 'axios';
import SearchBar from '../components/SearchBar';
import Schedule from '../components/Schedule';

function Planner() {
  const data = JSON.parse(window.localStorage.getItem("access_token"));
  const [subjectList, setSubjectList] = useState([]);
  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    Axios.get('http://localhost:5000/subjects')
      .then((response) => {
        setSubjectList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching subjects:', error);
      });
  }, []);

  return (
    <div>
      <BackBtn />
      <Stack sx={{
        rowGap: '10px',
        marginBottom: '15%',
      }}>
        <Schedule subjectList={subjectList}/>
        <SearchBar/>
        <Typography marginLeft='5%'>รายละเอียดชั้นเรียน</Typography>
        {subjectList.map((subject, index) => (
          <SubjectCard// Make sure to use a unique key for each element in the array
            key={index}
            subject_id={subject.subject_id}
            subject={subject.subject}
            time={subject.date}
            place={subject.place}
            clr={subject.clr}
          />
        ))}
      </Stack>
      <Tabbar />
    </div>
  )
}

export default Planner