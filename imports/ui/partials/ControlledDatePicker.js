
import React, { Component } from 'react';
// import { Label } from '@atlaskit/field-base';
//import { DatePicker, DateTimePicker, TimePicker } from '@atlaskit/datetime-picker';


class ControlledDatePicker extends Component {

    // recentlySelected: boolean = false;

    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue || '',
            isOpen: props.initialIsOpen || false,
        };
    }

    handleClick = () => {
        if (!this.recentlySelected) {
            this.setState({ isOpen: true });
        }
    };

    onValueChange = (value) => {
        console.log(value);
        this.recentlySelected = true;
        this.setState(
            {
                value,
                isOpen: false,
            },
            () => {
                setTimeout(() => {
                    this.recentlySelected = false;
                }, 200);
            },
        );
    };

    onBlur = () => {
        this.setState({
            isOpen: false,
        });
    };

    onFocus = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div onClick={this.handleClick}>
                {this.props.children({
                    value: this.state.value,
                    onValueChange: this.onValueChange,
                    isOpen: this.state.isOpen,
                    onBlur: this.onBlur,
                })}
            </div>
        );
    }
}

export default ControlledDatePicker;