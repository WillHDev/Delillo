import Staff from './staff'
// need fetch since find returns a cursor, a bunch of
//things we dont need

// Documents.insert({
//   name: 'Test Res'
// })



export default {
  Query: {
    staff() {
      return Staff.find({}).fetch()
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
