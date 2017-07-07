import React, {Component} from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';

export default class Planner extends Component {

  state = {
      value: '',
      items: [],
      selectedDay: new Date()
  }

  handleSubmitForm = e => {
    e.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.what, this.state.when, this.state.why]
    })
  }

  handleDayClick = day => {
    this.setState({
      selectedDay: day,
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>test
        <form onSubmit={this.handleSubmitForm}>
          <label>What</label>
            <input onChange={this.onChange} value={this.state.what} name='what'/>
          <label>When</label>
            <input onChange={this.onChange} value={this.state.when} name='when' type='date'/>
          <label>Why</label>
            <textarea onChange={this.onChange} value={this.state.why} name='why'/>
          <button>Add</button>
        </form>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </div>
    )
  }
}
