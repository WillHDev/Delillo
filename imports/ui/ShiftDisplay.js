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
type
 
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
            title: "Snoobo ONE",
            end: new Date('December 12, 2018 19:00:00'),
            start: new Date('December 12, 2018 05:00:00'),
            allDay: false,



            type: "morning"
        }
    ]
const ShiftDisplay = ({ loading, shifts, refetch }) => {

    if (loading) return null;
    //console.log('sk', ktaffShifts);

    let staffShifts = [];
    // console.log('shifts', shifts)
    shifts.map(shift => {
        delete shift.type, shift.__typename, shift._id;
        const start = moment(shift.start).format("MMMM D, YYYY HH:mm:ss");
        console.log('start!!!!', start);
        //const startFormat = start;
        const startFormat = new Date(start);
        shift.start = startFormat
        console.log('startFormat', startFormat);
        const end = moment(shift.end).format("MMMM D, YYYY HH:mm:ss");
        console.log('end!!!', end);
        //const endFormat = end;
        const endFormat = new Date(end);
        console.log('endFormat', endFormat);
        shift.end = endFormat
        return staffShifts.push(shift);

    })

    //console.log(' staffShifts', staffShifts);

    //     <ul>
    //     {shifts.map(shift => {
    //         return <li key={shift._id}><div> {shift.title}, {shift.start} </div></li>
    //     })}
    // </ul>
    return (
        <div >
            <Schedule staffShifts={staffShifts} realShifts={staffShifts} />
        </div>
    );
};

export default graphql(shiftQuery, {
    props: ({ data }) => ({ ...data })
})(ShiftDisplay);

// <Switch>
// <Route exact path="/schedule" component={Schedule} />

// </Switch>

