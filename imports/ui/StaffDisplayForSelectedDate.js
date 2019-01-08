import React, { Component } from "react";
import StaffDisplay from "./StaffDisplay";

export default class StaffDisplayForSelectedDate extends Component {
  render() {
    const { shifts } = this.props;
    console.log("shifts from bottom", shifts);
    let staff = [];
    shifts.map(shift => {
      console.log("shift.title just title", shift);
      return staff.push(shift.title);
    });
    return (
      <div>
        <h3>Morning</h3>
        <StaffDisplay staff={staff} />
      </div>
    );
  }
}
