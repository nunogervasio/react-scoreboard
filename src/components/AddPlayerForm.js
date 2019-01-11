import React, { Component } from "react";

class AddPlayerForm extends Component {
  // NOTE: React.createRef() can also be used for frorms but not recomended by React
  state = {
    value: ""
  };

  // THIS FUNCTION READS THE VALUES FROM THE TEXT INPUT AND ASSIGNS IT TO STATE
  // this frunction is passed a Dom event 'e'
  // the event object peovides a target property
  // which points to th underlying input element in the doom
  // we can read the value from it and update our state
  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };
  // THIS FUNCTION STBMITS THE STATE TO THE 'addPlayer' FUNCTION IN App.js
  handleSubmit = e => {
    // calling 'preventDefault()' on the event obj
    // prevents the forms default behaviour
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    // clears input of name
    this.setState({ value: "" });
  };

  render() {
    return (
      // 'onSubmit' is a React event
      // 'onSubmit' will exicute the handleSubmit function
      // the form is submited by clicking submit button or enter/retrun key
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          // 'onChange' is an event built in to React
          // whenever a form field is changed, this event is fired
          // onChange is passed the function 'handleValueChange' that syncs the state
          onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
