import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DropDown from './partials/DropDown';
import './ShiftSelection.css';

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
    state = {
        start: '',
        end: '',
        allDay: false,
        staff: '',
        type: 'morning'
    };
    handleChange = e => {
        //const { name, type, value } = e.target;
        console.log(e);
        // const { value, name } = e.target
        // console.log('value, name', value, name);
        // console.log(e.target);
        //const val = type === 'number' ? parseFloat(value) : value;

        // this.setState({ [name]: value });


    };

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