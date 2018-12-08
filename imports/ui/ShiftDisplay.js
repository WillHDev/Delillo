import React from 'react'
import { graphql } from "react-apollo";
import Schedule from './Schedule';
import gql from "graphql-tag";
import moment from 'moment';
import './App.css'


// const client = new ApolloClient({
//     uri: "/graphql",
//     request: operation =>
//         operation.setContext(() => ({
//             headers: {
//                 authorization: Accounts._storedLoginToken()
//             }
//         }))
// });

const shiftQuery = gql`
  {
    
    shifts{
      _id
      title

allDay
start
end

 
    }
  }
`;



const ktaffShifts =

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
console.log('ktaffShifts', ktaffShifts);
const ShiftDisplay = ({ loading, shifts, refetch }) => {

    if (loading) return null;
    console.log(shifts)
    // let staffShifts;
    // staffShifts = shifts.map(shift => {

    //     shift.start = moment.utc(shift.start).format("MMM D, YYYY HH:mm:ss");
    //     //shift.start = shift.start + ` GMT-0500 (Eastern Standard Time)`;
    //     shift.end = moment(shift.end).format("MMM D, YYYY HH:mm:ss");
    //     console.log('Start', shift.start)
    //     return shift;
    // })
    //     <ul>
    //     {shifts.map(shift => {
    //         return <li key={shift._id}><div> {shift.title}, {shift.start} </div></li>
    //     })}
    // </ul>
    return (
        <div >
            <Schedule staffShifts={shifts} />
        </div>
    );
};

export default graphql(shiftQuery, {
    props: ({ data }) => ({ ...data })
})(ShiftDisplay);

// <Switch>
// <Route exact path="/schedule" component={Schedule} />

// </Switch>

