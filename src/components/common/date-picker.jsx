import React from "react";
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";

export default class BasicConcepts extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }

  render() {
    return (
      <div className="container">
        <DayPicker onDayClick={this.handleDayClick} />
        {this.state.selectedDay ? (
          <p>
            <strong>Date: {this.state.selectedDay.toLocaleDateString()}</strong>
          </p>
        ) : (
          <p>Choose a date</p>
        )}
      </div>
    );
  }
}
