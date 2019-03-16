import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
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
