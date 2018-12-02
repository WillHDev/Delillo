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
            start: "2018-12-22T07:00:00",
            end: "2018-12-22T09:00:00",
            allDay: false,
            resource: "lemon"
        },
        {
            title: "Morning Shift",
            start: "2018-12-23T07:00:00",
            end: "2018-12-23T09:00:00",
            allDay: false,
            resource: "lemon"
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