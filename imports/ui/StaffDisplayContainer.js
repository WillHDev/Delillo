import React, { Component } from 'react'
import './StaffDisplayContainer';
import StaffDisplay from './StaffDisplay';
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from '@atlaskit/datetime-picker';

export default class StaffDisplayContainer extends Component {
    render() {
        const { staff } = this.props;
        console.log(' staff##$', staff);
        return (
            <div>
                <DatePicker id="datepicker-1" name="date" onChange={this.handleChangeDate} />
                <StaffDisplay staff={staff} />
            </div>
        )
    }
}
