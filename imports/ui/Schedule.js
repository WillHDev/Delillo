import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './Schedule.css';
import { withRouter } from "react-router";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment)






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
        // let shifts;
        const { staffShifts } = this.props;
        // shifts = staffShifts.map(shift => {
        //     shift.start = moment(shift.start).format("MMMM D, YYYY HH:mm:ss");
        //     shift.end = moment(shift.end).format("MMMM D, YYYY HH:mm:ss");
        //     return shift;
        // })
        return (
            <div className="schedule-container" >
                {staffShifts.map(shift => {
                    return <h6 key={shift._id}>{shift.title} + {shift.start} + {shift.end}</h6>
                })}
            </div>
        )
    }
}

export default withRouter(Schedule);

{/* <BigCalendar
                    localizer={localizer}
                    events={shifts}
                    defaultView={BigCalendar.Views.WEEK}
                    startAccessor="start"
                    endAccessor="end"
                    className="schedule"

                /> */}