import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import BackBtn from '../components/BackBtn';
import SearchBar from '../components/SearchBar';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const AllCourses = () => {
  const [subjectList, setSubjectList] = useState([]);
  const [filteredSubjectList, setFilteredSubjectList] = useState([]);
  const [txt, setTxt] = useState('');

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

  useEffect(() => {
    // Filter the subjectList based on the search text
    const filteredList = subjectList.filter(
      (element) =>
        element.subject_id.includes(txt) || element.subject.includes(txt)
    );
    setFilteredSubjectList(filteredList);
  }, [txt, subjectList]);

  return (
    <>
      <BackBtn />
      <div
        style={{
          maxWidth: '800px',
          margin: 'auto',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', color: '#333' }}>Course List</h1>
          <TextField
            id="input-with-icon-textfield"
            label="ค้นหา"
            value={txt}
            onChange={(event) => setTxt(event.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { borderRadius: 25 },
            }}
          />
        </header>
          <ul style={{ listStyle: 'none', padding: 0 }}>
          {(txt ? filteredSubjectList : subjectList).map((course) => (
            <li
              key={course.subject_id}
              style={{
                border: `1px solid #ddd`,
                borderRadius: '5px',
                marginBottom: '15px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>{course.subject}</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Time: {course.date}</p>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Location: {course.place}</p>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Professor: {course.professor}</p>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Credit: {course.credit}</p>
              <p style={{ fontSize: '14px', color: course.enroll === 1 ? '#28a745' : '#dc3545', marginBottom: '5px' }}>Enroll: {course.enroll === 1 ? 'Yes' : 'No'}</p>
            </li>
          ))}
          </ul>
      </div>
    </>
  );
};

export default AllCourses;
