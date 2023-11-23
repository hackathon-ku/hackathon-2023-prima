import * as React from 'react'
import Timetable from 'react-timetable-events'

const Schedule = () => <Timetable
  events={{
    monday: [
      {
        id: 1,
        name: "Custom Event 1",
        type: "custom",
        startTime: new Date("2018-02-23T10:30:00"),
        endTime: new Date("2018-02-23T13:30:00"),
      },

      {
        id: 1,
        name: "Custom Event 7",
        type: "custom",
        startTime: new Date("2018-02-23T12:00:00"),
        endTime: new Date("2018-02-23T14:30:00"),


      }
    ],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  }}
  style={{ height: '100%', border: '1px black solid' }}
/>

export default Schedule
