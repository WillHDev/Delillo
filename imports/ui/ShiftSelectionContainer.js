import React, { Component } from 'react'
import ShiftSelection from './ShiftSelection';
import ShiftDisplay from './ShiftDisplay';

export default class ShiftSelectionContainer extends Component {


    render() {
        return (
            <div>
                <ShiftSelection />
                <ShiftDisplay />
            </div>
        )
    }
}
