import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectBookCategory extends Component {
  render() {
    const { options, onChangeHanlder, selected, name } = this.props;
    return (
      <select value={selected} onChange={(e) => onChangeHanlder(e)} name={name}>
        {
          options.map((option, optionI) => {
            return <option key={`${option.label}_${optionI}`} value={option.value} disabled={option.disabled}>{option.label}</option>
          })
        }
      </select>
    )
  }
}

SelectBookCategory.propTypes = {
  options: PropTypes.array.isRequired,
  onChangeHanlder: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default SelectBookCategory;
