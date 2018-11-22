import React, { Component } from "react";

class Navigation extends Component {
  state = {
    activeItem: 0
  };

  render() {
    return (
      <div className="ui three item menu fixed">
        <a
          className={`item ${this.state.activeItem === 0 ? "active" : ""}`}
          onClick={() => this.setState({ activeItem: 0 })}
          href="#home"
        >
          Home
        </a>
        <a
          className={`item ${this.state.activeItem === 1 ? "active" : ""}`}
          onClick={() => this.setState({ activeItem: 1 })}
          href="#welcome-section"
        >
          About me
        </a>
        <a
          className={`item ${this.state.activeItem === 2 ? "active" : ""}`}
          onClick={() => this.setState({ activeItem: 2 })}
          href="#projects"
        >
          Projects
        </a>
      </div>
    );
  }
}

export default Navigation;
