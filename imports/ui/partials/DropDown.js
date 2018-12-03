import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
        name: 'hai',
        labelWidth: 0,
    };

    componentDidMount() {
        // this.setState({
        //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        // });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.onChange(event.target);
    };

    render() {

        let menuItems;
        menuItems = this.props.menuItems.map(item => {
            return <MenuItem value={item} key={item}>{item}</MenuItem>
        })
        console.log(this.props.menuItems);
        return (
            <Select
                type="text"
                name="staff"
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-simple',
                }}
            >

                {menuItems}
            </Select>
        );
    }
}

DropDown.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropDown);