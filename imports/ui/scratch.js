// { 
//     staff{
//       name
//       img
//     }
//}

// mutation  {
//     createStaff( 
//     type: "morning"
//       title: "Eric Patel"

//     date: "today"
//       start: "December 6, 2018 19:00:31"
//       end: "December 6, 2018 21:00:31"
//       allDay: false

//     ) {
//       _id
//     }


//   }

// { 
//     shifts{
//       _id
//       title
//       type
//       start
//       end 

//     }
//     }

//deleteAllShifts(where: {allDay: allDay}): [Shift]

// ,
//     deleteAllShifts(obj, payload, ctx) {
//       Shifts.remove({});
//       return 'success';
//     }