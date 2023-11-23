import { Box, Stack } from '@mui/material';
import React from 'react';
import Tabbar from '../components/Tabbar';
import BackBtn from '../components/BackBtn';
import { useNavigate } from 'react-router-dom';

function EmergencyCall() {

  return (
    <Stack>
        <BackBtn/>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh', // Set the height of the container to the full viewport height
        }}
      >
        {/* Section 1 */}
        <div
          id="squad1"
          style={{
            flex: 1, // Make each section take equal space
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f0f0f0',
            padding: '1rem',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>หน่วยงานที่ 1</div>
          <div style={{ fontSize: '1.2rem' }}> 081-1234-5678</div>
        </div>

        {/* Section 2 */}
        <div
          id="squad2"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fff',
            padding: '1rem',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Squad 2</div>
          <div style={{ fontSize: '1.2rem' }}>123-456-7890</div>
        </div>

        {/* Section 3 */}
        <div
          id="squad3"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f0f0f0',
            padding: '1rem',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Squad 3</div>
          <div style={{ fontSize: '1.2rem' }}>987-654-3210</div>
        </div>
      </Box>
      <Tabbar/>
    </Stack>
  );
}

export default EmergencyCall;
