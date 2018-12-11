import React, { Component } from "react";
import styled from "styled-components";
import MultiSelectStateless from "@atlaskit/multi-select";

const Vert = styled.div`
  display: flex;
  flex-direction: column;
`;

class MultipleSelect extends Component {
  state = {
    isOpen: false,
    selectedItems: [],
    filterValue: ""
  };
  selectItem = item => {
    const selectedItems = [...this.state.selectedItems, item];
    this.setState({ selectedItems });
  };
  removeItem = item => {
    const selectedItems = this.state.selectedItems.filter(
      i => i.value !== item.value
    );
    this.setState({ selectedItems });
  };

  selectedChange = item => {
    if (this.state.selectedItems.some(i => i.value === item.value)) {
      this.removeItem(item);
    } else {
      this.selectItem(item);
    }
    // we could update isInvalid here
  };

  handleFilterChange = value => {
    // value will tell us the value the filter wants to change to
    this.setState({ filterValue: value });
  };

  handleOpenChange = ({ event, isOpen }) => {
    // attrs.isOpen will tell us the state that the dropdown wants to move to
    this.setState({ isOpen: isOpen });
  };
  handleChange = event => {
    this.setState({ staff: event.target.value });
    this.props.onChange(event);
  };
  render() {
    const { selectionOptions, placeholder, label } = this.props;
    console.log("Selected", this.state.selectedItems);
    return (
      <Vert>
        <MultiSelectStateless
          items={selectionOptions}
          placeholder={placeholder}
          label={label}
          selectedItems={this.state.staff}
          onChange={this.handleChange}
          filterValue={this.state.filterValue}
          id={this.props.id}
          isDisabled={this.props.isDisabled}
          isOpen={this.state.isOpen}
          isRequired={this.props.isRequired}
          name="staff"
          noMatchesFound="Uh oh! No matches found!"
          onFilterChange={this.handleFilterChange}
          onOpenChange={this.handleOpenChange}
          onRemoved={this.selectedChange}
          onSelected={this.selectedChange}
          placeholder={this.props.placeholder}
          selectedItems={this.state.selectedItems}
          shouldFocus={this.props.shouldFocus}
          shouldFitContainer
        />
      </Vert>
    );
  }
}

export default MultipleSelect;
//   onChange={this.handleChange}
