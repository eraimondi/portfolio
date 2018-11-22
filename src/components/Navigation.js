import React, { Component } from "react";

class Navigation extends Component {
  state = {
    activeItem: 0
  };

  render() {
    return (
      <div className="ui three item menu top fixed ">
        <a
          className={`item ${this.state.activeItem === 0 ? "active" : ""}`}
          onClick={() => this.setState({ activeItem: 0 })}
          href="_blank"
        >
          Editorials
        </a>
        <a
          className={`item ${this.state.activeItem === 1 ? "active" : ""}`}
          onClick={() => this.setState({ activeItem: 1 })}
          href="_blank"
        >
          Reviews
        </a>
        <a
          className={`item ${this.state.activeItem === 2 ? "active" : ""}`}
          onClick={() => this.setState({ activeItem: 2 })}
          href="_blank"
        >
          Upcoming Events
        </a>
      </div>
    );
  }
}

export default Navigation;
