import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import StopWatch from "./StopWatch";

// STATELESS COMPONENT with
// DESTRUCTURING ASSIGNMENT
// destructuring assignment extractS values from arrays,
// or properties from objects into distinct variables.
// Since props is an object, we can destructure a component's props into
// individual variables which will help prevent us from having to repeat props or
// this.props everywhere we use props.
// There are two ways you can destructure props in a stateless functional component,
// with a variable assignment or in the =>functions parameters<=
// EX. 'props.title' becomes 'title' and 'props.players' becomes 'players

// Function paramenters used for deconstructing the props obj
const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <StopWatch />
    </header>
  );
};

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

// DefaultProps will make sure that props.title
// will have the value Scoreboard, if it's not specified by the parent app component.
// It also gets type checked in Header.propTypes
// FYI: we can omit the title prop in the header tag,
// because we're defaulting it to scoreboard.
Header.defaultProps = {
  title: "Scoreboard"
};

export default Header;
