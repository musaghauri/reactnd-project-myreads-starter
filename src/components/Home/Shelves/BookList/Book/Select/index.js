import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
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

Select.propTypes = {
  options: PropTypes.array,
  onChangeHanlder: PropTypes.func,
  selected: PropTypes.string,
  id: PropTypes.string,
}

export default Select
