import * as React from 'react';
import Timetable from 'react-timetable-events';

const Schedule = ({ subjectList }) => {
  const events = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
  };

  subjectList.map((subject, index) => {
    events[subject.day].push({
      id: subject.id,
      name: subject.subject,
      type: 'custom',
      startTime: new Date(subject.startTime),
      endTime: new Date(subject.endTime),
    });
    return null;
  });

  return (
    <Timetable
      events={events}
      style={{ 
        display: 'cover', 
        height: '500px', 
        border: '1px black solid', 
        overflow: 'auto', 
        margin: '16px',
        borderRadius: '10px',
        }}
    />
  );
};

export default Schedule;
