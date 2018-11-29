import React, { Component } from 'react'
import './StaffDisplay.css'

export default class StaffDisplay extends Component {
    render() {
        return (
            <div className="staff-display-container">
                <ul>
                    {this.props.data.documents.map(doc => (
                        <li key={doc._id}>{doc.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
