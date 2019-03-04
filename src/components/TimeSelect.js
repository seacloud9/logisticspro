import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types'

export default class TimeSelect extends Component {
    static propTypes = {
        value: PropTypes.number,
        ID: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        value: 0,
        ID:'selectTime',
        onChange: (value) => console.log(value)
    }
 
    state = {
        open:false,
        value:this.props.value
    }

    handleChange = (event) => {
        this.setState({value:event.target.value}, this.props.onChange(event.target.value))
    }
    
  render() {
    return (
        <Select
        value={this.state.value}
        onChange={this.handleChange}
        inputProps={{
          name: this.props.ID,
          id: this.props.ID,
        }}>
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value={7}>7am</MenuItem>
        <MenuItem value={8}>8am</MenuItem>
        <MenuItem value={9}>9am</MenuItem>
        <MenuItem value={10}>10am</MenuItem>
        <MenuItem value={11}>11am</MenuItem>
        <MenuItem value={12}>12am</MenuItem>
        <MenuItem value={13}>1pm</MenuItem>
        <MenuItem value={14}>2pm</MenuItem>
        <MenuItem value={15}>3pm</MenuItem>
        <MenuItem value={16}>4pm</MenuItem>
        <MenuItem value={17}>5pm</MenuItem>
        <MenuItem value={18}>6pm</MenuItem>
        <MenuItem value={19}>7pm</MenuItem>
        <MenuItem value={20}>8pm</MenuItem>
    </Select>
    )
  }
}
