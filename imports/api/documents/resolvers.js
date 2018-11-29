import Documents from './documents'
// need fetch since find returns a cursor, a bunch of
//things we dont need

// Documents.insert({
//   name: 'Test Res'
// })



export default {
  Query: {
    documents() {
      return Documents.find({}).fetch()
    }
  },
  Mutation: {
    createStaff(obj, { name }, ctx) {
      const staffId = Documents.insert({
        name
      })
      return Documents.findOne({ staffId })
    }
  }
};


//[
//   { _id: "asbdjnk", name: "Important Read" },
//   { _id: "asbdjnkdd", name: "Important Work" }
// ];

// const res = Documents.find({}).fetch();
// console.log(res)
