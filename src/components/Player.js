import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

// PURE COMPONENT
// PureComponent implements a lifecycle method behind the scenes called
// shouldComponentUpdate that runs a shallow comparison of props and state.
// The lifecycle method automatically checks whether a rerender is required for
// the component and calls render only if it detects changes in state or props.
// NOTE: 'this.props' is used. NOT 'this.state' OR 'props'
// Use PureComponent when you have performance issues and
// have determined that a specific component is rerendering too often.
// It gives you the chance to skip rerendering when the component state or props haven't changed.
class Player extends PureComponent {
  // When working with class components,
  // it's also common to see prop types defined inside the class.
  // Usually at the top and outside of the render method, with the static keyword.
  // Static just provides another way to define prop types on the class.
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    isHighScore: PropTypes.bool
  };
  render() {
    console.log(`${this.props.name} rendered`);
    // destructuring assignment in a class is done with a variable assignment
    const { id, name, score, index, changeScore, removePlayer } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={this.props.isHighScore} />
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
