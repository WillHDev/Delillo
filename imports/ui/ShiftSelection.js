import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { withStyles } from "@material-ui/core/styles";
import DropDown from "./partials/DropDown";
import MultipleSelect from "./partials/MultipleSelect";
import "./ShiftSelection.css";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, TimePicker } from "@atlaskit/datetime-picker";
import Select from "@atlaskit/select";
//import type, { GroupType } from '../../../client/types';

//: Array<GroupType> =
const selectionOptions = [
  {
    heading: "Lead Staff",
    items: [
      { content: "Allan Patel", value: "Allan Patel" },
      { content: "Lisa Rios", value: "Lisa Rios" },
      { content: "Joyce Holden", value: "Joyce Holden" }
    ]
  },
  {
    heading: "Staff",
    items: [
      { content: "Allan Patel", value: "Allan Patel" },
      { content: "Lisa Rios", value: "Lisa Rios" },
      { content: "Joyce Holden", value: "Joyce Holden" }
    ]
  },
  {
    heading: "Staff",
    items: [
      { content: "Allan Patel", value: "Allan Patel" },
      { content: "Lisa Rios", value: "Lisa Rios" },
      { content: "Joyce Holden", value: "Joyce Holden" }
    ]
  }
];

const createShift = gql`
  mutation createShift(
    $title: [String]!
    $date: String!
    $start: String!
    $end: String!
    $allDay: Boolean!
    $type: String!
  ) {
    createShift(
      title: $title
      type: $type
      date: $date
      start: $start
      end: $end
      allDay: $allDay
    ) {
      _id
    }
  }
`;
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class ShiftSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      start: "",
      end: "",
      allDay: false,
      title: [],
      type: "",
      staff: ["Lisa Rios", "Eric Patel", "Joyce Holden"]
    };
  }
  submitForm = e => {
    e.preventDefault();
    //const dateTime = this.state.date + ":" + this.state.start;
    // console.log("staff", typeof this.state.title[0]);
    // let staffArray = [];
    // this.state.title.map(staff => {
    //   return staffArray.push(staff);
    // });
    this.props
      .createShift({
        variables: {
          start: this.state.start,
          end: this.state.end,
          date: this.state.date,
          allDay: this.state.allDay,
          type: this.state.type,
          title: this.state.title
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  // .then(({ data }) => {
  //     this.props.refetch()
  // })

  handleAddShiftType = type => {
    this.setState({
      type: type.value
    });
  };
  handleAddStaff = staffAddition => {
    this.setState(state => {
      const title = state.title.concat(staffAddition.value);

      //remove staffAddition from options array for susequent inputs
      const staff = state.staff.filter(staff => staff !== staffAddition.value);
      return {
        title,
        staff
      };
    });
    console.log("staff title", this.state.title, this.state.staff);
  };

  //   handleChangeStaff = e => {
  //     const staff = e.target.value;
  //     const staffArray = this.state.title;
  //     console.log("staffArray", staffArray);
  //     const newArray = staffArray.push(staff);
  //     this.setState({
  //       title: newArray
  //     });
  //     console.log("Title", this.state.title);
  //   };
  handleChangeDate = e => {
    //const date = Date(e)
    this.setState({
      date: e
    });
    console.log(this.state);
  };
  handleChangeStartTime = time => {
    const hours = time.slice(0, 2);
    const minutes = time.slice(3, 5);
    const dateTest = new Date(this.state.date);
    dateTest.setHours(hours);
    dateTest.setMinutes(minutes, 0);
    this.setState({
      start: dateTest
    });
  };
  handleChangeEndTime = time => {
    const hours = time.slice(0, 2);
    const minutes = time.slice(3, 5);
    const dateTest = new Date(this.state.date);
    dateTest.setHours(hours);
    dateTest.setMinutes(minutes, 0);
    this.setState({
      end: dateTest
    });
  };

  handleTimeChange = value => {
    this.setState({
      start: value
    });
  };

  render() {
    const { classes } = this.props;
    const { staff } = this.state;
    const options = [];
    staff.map(item => {
      return options.push({ label: item, value: item });
    });
    return (
      <form onSubmit={this.submitForm} className={classes.container} noValidate>
        <fieldset>
          <h3>Choose a Support</h3>
          <label htmlFor="staff" className="label">
            Shift Type
            <br />
            <Select
              options={[
                { label: "Morning", value: "Morning" },
                { label: "Afternoon", value: "Afternoon" },
                { label: "Evening", value: "Evening" },
                { label: "Overnight", value: "Overnight" }
              ]}
              onChange={this.handleAddShiftType}
            />
          </label>
          <br />
          <DatePicker
            id="datepicker-1"
            name="date"
            onChange={this.handleChangeDate}
          />

          <br />
          <TimePicker
            id="start"
            onChange={this.handleChangeStartTime}
            selectProps={{ classNamePrefix: "timepicker-select" }}
            times={[
              "00:00",
              "00:15",
              "00:30",
              "00:45",
              "01:00",
              "01:15",
              "01:30",
              "01:45",
              "02:00",
              "02:15",
              "02:30",
              "02:45",
              "03:00",
              "03:15",
              "03:30",
              "03:45",
              "04:00",
              "04:15",
              "04:30",
              "04:45",
              "05:00",
              "05:15",
              "05:30",
              "05:45",
              "06:00",
              "06:15",
              "06:30",
              "06:45",
              "07:00",
              "07:15",
              "07:30",
              "07:45",
              "08:00",
              "08:15",
              "08:30",
              "08:45",
              "09:00",
              "09:15",
              "09:30",
              "09:45",
              "10:00",
              "10:15",
              "10:30",
              "10:45",
              "11:00",
              "11:15",
              "11:30",
              "11:45",
              "12:00",
              "12:15",
              "12:30",
              "12:45",
              "13:00",
              "13:15",
              "13:30",
              "13:45",
              "14:00",
              "14:15",
              "14:30",
              "14:45",
              "15:00",
              "15:15",
              "15:30",
              "15:45",
              "16:00",
              "16:15",
              "16:30",
              "16:45",
              "17:00",
              "17:15",
              "17:30",
              "17:45",
              "18:00",
              "18:15",
              "18:30",
              "18:45",
              "19:00",
              "19:15",
              "19:30",
              "19:45",
              "20:00",
              "20:15",
              "20:30",
              "20:45",
              "21:00",
              "21:15",
              "21:30",
              "21:45",
              "22:00",
              "22:15",
              "22:30",
              "22:45",
              "23:00",
              "23:15",
              "23:30",
              "23:45"
            ]}
          />
          <br />
          <TimePicker
            id="end"
            onChange={this.handleChangeEndTime}
            selectProps={{ classNamePrefix: "timepicker-select" }}
            times={[
              "00:00",
              "00:15",
              "00:30",
              "00:45",
              "01:00",
              "01:15",
              "01:30",
              "01:45",
              "02:00",
              "02:15",
              "02:30",
              "02:45",
              "03:00",
              "03:15",
              "03:30",
              "03:45",
              "04:00",
              "04:15",
              "04:30",
              "04:45",
              "05:00",
              "05:15",
              "05:30",
              "05:45",
              "06:00",
              "06:15",
              "06:30",
              "06:45",
              "07:00",
              "07:15",
              "07:30",
              "07:45",
              "08:00",
              "08:15",
              "08:30",
              "08:45",
              "09:00",
              "09:15",
              "09:30",
              "09:45",
              "10:00",
              "10:15",
              "10:30",
              "10:45",
              "11:00",
              "11:15",
              "11:30",
              "11:45",
              "12:00",
              "12:15",
              "12:30",
              "12:45",
              "13:00",
              "13:15",
              "13:30",
              "13:45",
              "14:00",
              "14:15",
              "14:30",
              "14:45",
              "15:00",
              "15:15",
              "15:30",
              "15:45",
              "16:00",
              "16:15",
              "16:30",
              "16:45",
              "17:00",
              "17:15",
              "17:30",
              "17:45",
              "18:00",
              "18:15",
              "18:30",
              "18:45",
              "19:00",
              "19:15",
              "19:30",
              "19:45",
              "20:00",
              "20:15",
              "20:30",
              "20:45",
              "21:00",
              "21:15",
              "21:30",
              "21:45",
              "22:00",
              "22:15",
              "22:30",
              "22:45",
              "23:00",
              "23:15",
              "23:30",
              "23:45"
            ]}
          />

          <br />
          <label htmlFor="staff" className="label">
            Lead Staff
            <br />
            <Select options={options} onChange={this.handleAddStaff} />
          </label>
          <label htmlFor="staff" className="label">
            Support Coach 1
            <br />
            <Select options={options} onChange={this.handleAddStaff} />
          </label>
          <label htmlFor="staff" className="label">
            Support Coach 2
            <br />
            <Select options={options} onChange={this.handleAddStaff} />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

ShiftSelection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  graphql(createShift, {
    name: "createShift"
  })(ShiftSelection)
);

{
  /* <MultipleSelect
selectionOptions={selectionOptions}
placeholder="Choose Staff..."
label="Staff"
/> */
}
//          onChange={this.handleChangeStaff}

// export default withStyles(styles)(ShiftSelection);

//<input
// placeholder="Name..."
// name="name"
// id="name"
// type="text"
// ref={input => (this.name = input)}
// onChange={this.handleChange}
// required
// />

{
  /* <DatePicker
className="date-selector"
selected={this.state.date}
onChange={this.handleChange}
/> */
}

//this.handleChange = this.handleChange.bind(this);
//
// handleChange = e => {
//     //const { name, type, value } = e.target;
//     console.log(e.target);
//     // const { value, name } = e.target
//     // console.log('value, name', value, name);
//     // console.log(e.target);
//     //const val = type === 'number' ? parseFloat(value) : value;

//     // this.setState({ [name]: value });

// };
