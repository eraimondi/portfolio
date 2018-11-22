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
        >
          Editorials
        </a>
        <a
          className={`item ${this.state.activeItem === 1 ? "active" : ""}`}
          onClick={() => this.setState({ activeItem: 1 })}
        >
          Reviews
        </a>
        <a
          className={`item ${this.state.activeItem === 2 ? "active" : ""}`}
          onClick={() => this.setState({ activeItem: 2 })}
        >
          Upcoming Events
        </a>
      </div>
    );
  }
}

export default Navigation;
