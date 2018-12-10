import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
    root: {

        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class DropDown extends React.Component {
    state = {
        age: '',
        staff: '',
        labelWidth: 0,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.onChange(event);
    };

    render() {

        let menuItems;
        menuItems = this.props.menuItems.map(item => {
            return <option value={item} key={item}>{item}</option>
        })
        console.log(this.props.menuItems);
        return (
            <div>
                <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
                <NativeSelect
                    value={this.state.staff}
                    onChange={this.handleChange}
                    input={<Input name="staff" id="name-native-disabled" />}
                >
                    {menuItems}
                </NativeSelect>
            </div>
        );
    }
}

DropDown.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropDown);

