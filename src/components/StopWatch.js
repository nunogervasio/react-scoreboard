import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  // REACT BUILT-IN LIFECYCLE METHOD (lifecycle hook)
  // this method gets called by react when this component is mounted in the DOM
  componentDidMount() {
    // 'setInertval' returns an 'intervalID' that is a unique ID that identifys each interval
    // 'setInertval' calls the 'tick()' method every '100' milliseconds
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  // this will clear the interval so that the 'setInterval'
  // is not causing a memory leak if the component is unmounted
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // ANONYMOUS FUNCTION EXPRESSION
  // each time tick runs if 'isRunning' is true
  // 'setState' is going to update the 'elapsedTime'
  // using the difference between 'previouseTime' and 'now'
  // at the sometime it's updating 'previousTime' to Date.now()
  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        // 'previousTime' is used to figure out the precise 'elapsedTime'
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  };

  // ANONYMOUS FUNCTION EXPRESSION
  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };
  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  };

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>StopWatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
