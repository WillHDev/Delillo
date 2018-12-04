import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DropDown from './partials/DropDown';
import './ShiftSelection.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
// import TimePicker from 'rc-time-picker';
import moment from 'moment';
import { TimePicker } from 'react-input-moment';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class ShiftSelection extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            moment: moment(),
            start: moment(),
            end: '',
            allDay: false,
            staff: '',
            type: 'morning'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // handleChange = e => {
    //     //const { name, type, value } = e.target;
    //     console.log(e.target);
    //     // const { value, name } = e.target
    //     // console.log('value, name', value, name);
    //     // console.log(e.target);
    //     //const val = type === 'number' ? parseFloat(value) : value;

    //     // this.setState({ [name]: value });


    // };

    submitForm = (e) => {
        e.preventDefault();

        console.log(this.state);
        // this.props.createShift({
        //     variables: this.state
        // }).then(({ data }) => {
        //     this.props.refetch()
        // }).catch(error => {
        //     console.log(error)
        // });

    }

    customOnChange = field => (e, k, payload) => {
        field.set('value', payload); // not sure about this

    };
    handleChange = (date) => {
        // const { target: { name, value } } = event;
        // this.setState(() => ({ [name]: value }))
        this.setState({
            date: date
        });
    }
    handleTimeChange = (value) => {
        console.log(value);
        this.setState({
            start: value
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <form onSubmit={this.submitForm} className={classes.container} noValidate>

                <fieldset>
                    <label htmlFor="staff" className="label">
                        Enter a Support

                    <TextField

                            name="start"
                            id="datetime-local"
                            label="Shift Start"
                            type="datetime-local"
                            defaultValue="2018-12-24T6:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChange}
                        />
                        <TextField
                            name="end"
                            id="datetime-local"
                            label="Shift End"
                            type="datetime-local"
                            defaultValue="2018-12-24T9:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChange}
                        />
                    </label>
                    <DatePicker
                        className="date-selector"
                        selected={this.state.date}
                        onChange={this.handleChange}
                    />
                    <div className="wrapper">
                        <TimePicker
                            moment={this.state.moment}
                            onChange={this.handleChange}
                            showSeconds={true}
                            locale="en"
                        />
</div>
                        <br />
                        <label htmlFor="staff" className="label">
                            Staff
    
                    <br />
                            <DropDown
                                menuItems={["Lisa Rios", "Eric Patel", "Joyce Holden"]}
                                name="staff"
                                onChange={this.handleChange} />
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
                    classes: PropTypes.object.isRequired,
            };
            
            export default withStyles(styles)(ShiftSelection);
            
            
//<input
// placeholder="Name..."
// name="name"
// id="name"
// type="text"
// ref={input => (this.name = input)}
// onChange={this.handleChange}
// required
// />

