// {
//     staff{
//       name
//       img
//     }
// }

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
//      _id
//       [title]
//     }
//   }

// mutation {
//     deleteShift(_id: "9GZJoEBn6YiFH2ogA"){
//    _id
//     }

//   }

// mutation{
//     updateStaff(_id: "nuB4AqZrYoiXnrFmm",
//       name: "Joyce Holden",
//       img: "https://res.cloudinary.com/dx7xupqyp/image/upload/v1543514755/uc6ivytz78m4gpomhyaj.jpg",
//       largeImg: "https://res.cloudinary.com/dx7xupqyp/image/upload/c_scale,q_auto,w_800/v1543514755/uc6ivytz78m4gpomhyaj.jpg"
//     ){
//     name
//   }
// }

{
    "data": {
      "shifts": [
    
        {
          "_id": "qAhhXsJEdyiZ8NiwE",
          "start": "2019-02-27T11:00:00.000Z"
        },
        {
          "_id": "pFinzQnKWYLMYxnWN",
          "start": "2019-02-27T19:30:00.000Z"
        },
        {
          "_id": "YYjHZJCsaezEHCzod",
          "start": "2019-02-28T02:00:00.000Z"
        },
        {
          "_id": "aWJcsScxffk8ytcSd",
          "start": "2019-02-27T11:00:00.000Z"
        }
      ]
    }
  }

  mutation {
    deleteShift(_id: "9GZJoEBn6YiFH2ogA")



  }