import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DropDown from './partials/DropDown';

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

function ShiftSelection(props) {
    const { classes } = props;

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="Enter a Support"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <label htmlFor="staff">
                Staff
            <input
                    placeholder="Name..."
                    name="name"
                    id="name"
                    type="text"
                    ref={input => (this.name = input)}
                    onChange={this.handleChange}
                    required
                />

            </label>

        </form>
    );
}
ShiftSelection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShiftSelection);
