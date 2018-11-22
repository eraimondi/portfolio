import React, { Component } from "react";
import Projects from "./Projects";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import projects from "../projects";

class App extends Component {
  state = {
    image: false,
    welcome: false
  };

  toggleImageState = () => {
    this.setState({ image: !this.state.image });
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="ui container " id="home">
          <Header
            image={this.state.image}
            toggleImageState={this.toggleImageState}
          />

          <section id="welcome-section" className="ui segment">
            <h1>About me</h1>
            <p>
              My name is Eduardo Raimondi, I'm a 28yo developer from Cutral-Có ,
              with 6 years of development experience going from lenguages like
              C++, Java and some Haskell, all the way to javascript were I have
              stayed to perfect my skills on web Apps development with React.js
              and friends, itching to build new things, and learn new things,
              while working in fantastic user experiences, I'm currently
              studiying to get a CS degree from UP (University of Palermo)
            </p>
          </section>

          <section id="projects">
            <div className="ui segment">
              <h1 className="ui centered">Projects</h1>
              <div className="ui grid three column stackable doubling">
                {projects.map((item, index) => (
                  <Projects key={index} item={item} />
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
