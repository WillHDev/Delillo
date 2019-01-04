import React, { Component } from "react";
import "./StaffDisplayContainer";
import { withRouter } from "react-router-dom";
import StaffDisplay from "./StaffDisplay";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from "@atlaskit/datetime-picker";
import moment from "moment";
import ControlledDatePicker from "./partials/ControlledDatePicker";

class StaffDisplayContainer extends Component {
  state = {
    date: this.currentDate
  };

  currentDate = moment();

  handleChangeDate = e => {
    const date = Date(e);
    this.setState({
      date
    });
    console.log(this.state);
  };

  render() {
    const { shifts } = this.props;
    console.log("shifts", shifts);

    return (
      <div>
        <ControlledDatePicker initialValue={this.currentDate}>
          {({ value, onValueChange, onBlur }) => (
            <DatePicker
              value={value}
              onChange={onValueChange}
              onBlur={onBlur}
            />
          )}
        </ControlledDatePicker>
      </div>
    );
  }
}
export default withRouter(StaffDisplayContainer);
{
  /* <DatePicker
id="datepicker-1"
name="date"
onChange={this.handleChangeDate} /> */
}
