import React, { Component } from 'react'
import './StaffDisplay.css'

export default class StaffDisplay extends Component {
    render() {
        return (
            <div className="staff-display-container">
                <ul>
                    {this.props.data.staff.map(staff => (
                        <li key={staff._id}>{staff.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
