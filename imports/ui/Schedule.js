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

        const { staffShifts, realShifts } = this.props;
        let shifts = [];
        staffShifts.map(shift => {
            let start = shift.start;
            start = new Date(start);
            shift.start = start;
            let end = shift.end;
            end = new Date(end);
            shift.end = end;
            return shifts.push(shift);
        })
        console.log('shifts^^^', shifts);

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

// const date = "2018-12-04T19:00:31-05:00";
// //moment().format("MMMM D, YYYY, HH:mm:ss")
// const newDate = moment(date).format("MMMM D, YYYY HH:mm:ss");
//console.log(newDate);
// const date = Date("2018-12-04");
// console.log(date);
// let shifts;

   // shifts = staffShifts.map(shift => {
        //     shift.start = moment(shift.start).format("MMMM D, YYYY HH:mm:ss");
        //     shift.end = moment(shift.end).format("MMMM D, YYYY HH:mm:ss");
        //     return shift;
        // })
        // let shiftDisplay;
        // shiftDisplay = staffShifts.map(shift => <h6 key={shift._id}>{shift.title} + {shift.start} + {shift.end}</h6>
        // )