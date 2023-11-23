import React from 'react'
import BackBtn from '../components/BackBtn'
import { Box, Stack, Grid } from '@mui/material'
import SubjectCard from '../components/SubjectCard';


function Subjects() {
  const data = JSON.parse(window.localStorage.getItem("access_token"));
  const [subjectList, setSubjectList] = useState([]);
  useEffect(() => {
    // Use useEffect to fetch data when the component mounts
    Axios.get('http://localhost:5001/subjects')
      .then((response) => {
        setSubjectList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching subjects:', error);
      });
  }, []);
  return (
    <>
      <BackBtn />
      <Stack spacing={3}>
        <div style={{ textAlign: 'center', height: '20%', marginTop: '10%' }}>
          insert
        </div>
        <Box>
          <div style={{ textAlign: 'right', marginRight: '8%' }}>Filter</div>
        </Box>
      </Stack>
      <Stack >
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


    </>

  )
}

export default Subjects