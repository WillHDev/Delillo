import Staff from './staff'
import Shifts from './shifts'
// need fetch since find returns a cursor, a bunch of
//things we dont need

// Documents.insert({
//   name: 'Test Res'
// })



export default {
  Query: {
    staff() {
      return Staff.find({}).fetch()
    },
    shifts() {
      return Shifts.find({}).fetch()
    }
  },
  Mutation: {
    createStaff(obj, { name, img, largeImg }, ctx) {
      const staffId = Staff.insert({
        name,
        img,
        largeImg
      })
      return Staff.findOne({ staffId })
    },
    updateStaff(obj, { _id, name, img, largeImg }, ctx) {


      const staffId = Staff.findByIdAndUpdate(
        _id,
        {
          $set: {
            name,
            img,
            largeImg
          }
        },
        { new: true });
      return Staff.findOne({ staffId })
    },
    createShift(obj, { start, end, type, allDay, title, date }, ctx) {
      const shiftId = Shifts.insert({
        start, end, type, allDay, title, date
      })
      return Shifts.findOne({ shiftId })
    }
    // deleteStaff(obj, { _id }, ctx) {
    //   const staff = Staff.findOne({ _id })
    //   Staff.deleteItem({ _id })
    //   return staff;
    // }
  }
};


//[
//   { _id: "asbdjnk", name: "Important Read" },
//   { _id: "asbdjnkdd", name: "Important Work" }
// ];

// const res = Documents.find({}).fetch();
// console.log(res)
