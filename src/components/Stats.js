import React from "react";
import PropTypes from "prop-types";

// STATELESS COMPONENT
const Stats = props => {
  const totalPlayers = props.players.length;
  // 'total' is the accumulator
  // 'player' is the current item being processed in the array
  // '0' sets the inicial value to 0
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  // we can even be more specific by specifying the
  // properties of the object with the shape method.
  players: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number.isRequired
    })
  )
};

export default Stats;
