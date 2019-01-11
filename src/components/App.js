import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Bill",
        score: 0,
        id: 1
      },
      {
        name: "Burt",
        score: 0,
        id: 2
      },
      {
        name: "Boz",
        score: 0,
        id: 3
      },
      {
        name: "Benicio",
        score: 0,
        id: 4
      }
    ]
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          // using the spread operator '...' to combine with new player obj
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: (this.prevPlayerId += 1)
          }
        ]
      };
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* map takes an opotional parameter 'index' 
        that returns the index of the current element beingprocessed */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            isHighScore={highScore === player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
