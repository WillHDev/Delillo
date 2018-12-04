import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DropDown from './partials/DropDown';
import './ShiftSelection.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { TimePicker } from '@atlaskit/datetime-picker';


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

      <TimePicker
        id="start"
        onChange={this.onChange}
        selectProps={{ classNamePrefix: 'timepicker-select' }}
        times={["00:00", "00:15", 
        "00:30", "00:45",
        "01:00", "01:15", 
        "01:30", "01:45",
        "02:00", "02:15", 
        "02:30", "02:45",
        "03:00", "03:15", 
        "03:30", "03:45",
        "04:00", "04:15", 
        "04:30", "04:45",
        "05:00", "05:15", 
        "05:30", "05:45",
        "06:00", "06:15", 
        "06:30", "06:45",
        "07:00", "07:15", 
        "07:30", "07:45",
        "08:00", "08:15", 
        "08:30", "08:45",
        "09:00", "09:15", 
        "09:30", "09:45",
        "10:00", "10:15", 
        "10:30", "10:45",
        "11:00", "11:15", 
        "11:30", "11:45",
        "12:00", "12:15", 
        "12:30", "12:45",
        "13:00", "13:15", 
        "13:30", "13:45",
        "14:00", "14:15", 
        "14:30", "14:45",
        "15:00", "15:15", 
        "15:30", "15:45",
        "16:00", "16:15", 
        "16:30", "16:45",
        "17:00", "17:15", 
        "17:30", "17:45",
        "18:00", "18:15", 
        "18:30", "18:45",
        "19:00", "19:15", 
        "19:30", "19:45",
        "20:00", "20:15", 
        "20:30", "20:45",
        "21:00", "21:15", 
        "21:30", "21:45",
        "22:00", "22:15", 
        "22:30", "22:45",
        "23:00", "23:15", 
        "23:30", "23:45"
         ]}
      />

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

