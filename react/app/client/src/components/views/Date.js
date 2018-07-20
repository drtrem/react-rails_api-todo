import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Date extends Component {

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (date) {
    this.props.editTask(this.props.task.id, this.props.task.name, this.props.task.status, this.props.task.project_id, moment(date).format('YYYY-MM-DD'));
  }

  render () {
    const {
      task 
    } = this.props

    return (
      <div>
        <DatePicker
          selected={ task.date ? moment(task.date , 'YYYY-MM-DD') : null }
          onChange={this.handleChange}
          withPortal
          dateFormat="YYYY-MM-DD"
          placeholderText='enter date'
        />
      </div>
    )
  }
}

export default Date;