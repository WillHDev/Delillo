import React, { Component } from 'react';
import styled from 'styled-components';
import MultiSelect from '@atlaskit/multi-select';

const Vert = styled.div`
  display: flex;
  flex-direction: column;
`;

class MultipleSelect extends Component {
    state = {
        staff: []
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.onChange(event);
    };
    render() {
        const { selectionOptions, placeholder, label } = this.props;
        return (
            <Vert>
                <MultiSelect
                    items={selectionOptions}
                    placeholder={placeholder}
                    label={label}
                />
            </Vert>
        )
    }

};

export default MultipleSelect;