import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './Schedule.css';
import { withRouter } from "react-router";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment)



const staffShifts =
    [
        {
            title: "Morning Shift",
            end: new Date('December 10, 2018 11:00:00'),
            start: new Date('December 10, 2018 13:00:00'),
            allDay: false,

        },
        {
            title: "Morning Shift",
            end: new Date('December 22, 2018 11:00:00'),
            start: new Date('December 22, 2018 13:00:00'),
            allDay: false,

        }
    ]


const Schedule = props => (
    <div className="schedule-container">
        <BigCalendar
            localizer={localizer}
            events={staffShifts}
            startAccessor="start"
            endAccessor="end"
            className="schedule"
        />
    </div>
)

export default withRouter(Schedule);