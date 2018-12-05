import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment';
const localizer = BigCalendar.momentLocalizer(moment)
const staffShifts =
    [
        {
            title: "Morning Shift",
            end: new Date('December 4, 2018 11:00:00'),
            start: new Date('December 4, 2018 12:00:00'),
            allDay: false,

        },
        {
            title: "Nice",
            end: new Date('December 6, 2018 12:00:00'),
            start: new Date('December 6, 2018 13:00:00'),
            allDay: false,

        },
        {
            title: "Morning Shift",
            end: new Date('December 7, 2018 11:00:00'),
            start: new Date('December 22, 2018 13:00:00'),
            allDay: false,

        }
    ]

let Timeslots = () => (
    <BigCalendar
        events={staffShifts}
        step={15}
        timeslots={8}
        localizer={localizer}
        defaultView={BigCalendar.Views.WEEK}
        defaultDate={new Date(2018, 11, 26)}
    />
)

export default Timeslots