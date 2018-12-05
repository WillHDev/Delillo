import React, { Component } from 'react';
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
            end: new Date('December 10, 2018 23:00:00'),
            start: new Date('December 10, 2018 14:00:00'),
            allDay: false,

        },
        {
            title: "",
            end: new Date('December 10, 2018 13:00:00'),
            start: new Date('December 10, 2018 12:00:00'),
            allDay: false,

        },
        {
            title: "Lisa Rios, Donald Parr," + "    " + "Backland Rennings",
            end: new Date('December 22, 2018 11:00:00'),
            start: new Date('December 22, 2018 05:00:00'),
            allDay: false,

        },
        {
            title: "Snoobo",
            end: new Date('December 4, 2018 19:00:00'),
            start: new Date('December 4, 2018 05:00:00'),
            allDay: false,

            date: "Tue Dec 04 2018 20:13:20 GMT-0500 (Eastern Standard Time)",

            type: "morning"
        }

    ]


class Schedule extends Component {
    // eventStyleGetter(event, start, end, isSelected) {
    //     console.log(event);

    //     const style = {
    //         'line-height': '2'
    //     };
    //     return {
    //         style: style
    //     };
    // }


    render() {
        const date = "2018-12-04T19:00:31-05:00";
        //moment().format("MMMM D, YYYY, HH:mm:ss")
        const newDate = moment(date).format("MMMM D, YYYY HH:mm:ss");
        console.log(newDate);
        // const date = Date("2018-12-04");
        // console.log(date);
        return (
            <div className="schedule-container" >
                <BigCalendar
                    localizer={localizer}
                    events={staffShifts}
                    defaultView={BigCalendar.Views.WEEK}
                    startAccessor="start"
                    endAccessor="end"
                    className="schedule"

                />
            </div>
        )
    }
}

export default withRouter(Schedule);

