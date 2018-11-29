import React, { Component } from 'react'
import './StaffDisplay.css'

export default class StaffDisplay extends Component {
    render() {
        return (
            <div className="staff-display-container">
                <ul>
                    {this.props.data.staff.map(staff => {
                        console.log('staff', staff);
                        return (
                            <li key={staff._id}>
                                <h4> {staff.name}</h4>
                                <img width="200" src={staff.img} alt={staff.img} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
} 
