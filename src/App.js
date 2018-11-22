import React, { Component } from "react";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import projects from "./projects";
//projects will recieve as props an array of projects...were are the coming from?

//TODO add a media query to correctly view on a phone?

class App extends Component {
  me =
    "https://media.licdn.com/dms/image/C5603AQF3R-8fYvpVmg/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=lKBAK0n0-ah0-ju5nyv3rRpQXq1KYzidDQalhMMq-bc";
  anonymous =
    "http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-fb-3.jpg";
  state = {
    image: false,
    welcome: false
  };

  render() {
    return (
      <div>
        <Navigation />

        <div className="ui container " id="home">
          <div className="ui segment" style={{ marginTop: "55px" }}>
            <img
              src={this.state.image ? this.me : this.anonymous}
              alt="me"
              onMouseOver={() => this.setState({ image: true })}
              onMouseLeave={() => this.setState({ image: false })}
              className="ui centered image circular small "
            />
            <h1 className="ui header centered" style={{ fontSize: "40px" }}>
              Eduardo Raimondi's Portfolio
            </h1>
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              <b>
                React developer, currently walking the fullstack path with
                React,Apollo and Express
              </b>
            </p>
          </div>

          <section id="welcome-section" className="ui segment">
            <h1 style={{ fontSize: "40px", textAlign: "center" }}>About me</h1>
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              My name is Eduardo Raimondi, I'm a 28yo developer from Cutral-Có ,
              with 6 years of development experience going from lenguages like
              C++, Java and some Haskell, all the way to javascript were I have
              stayed to perfect my skills on web Apps development with React.js
              and friends, itching to build new things, and learn new things,
              while working in fantastic user experiences
            </p>
          </section>
          <section id="projects">
            <div className="ui segment">
              <h1 className="ui header centered">Projects</h1>
              <div className="ui grid three column stackable doubling">
                {projects.map((item, index) => (
                  <Projects key={index} item={item} />
                ))}
              </div>
            </div>
          </section>
          <div className="ui segment aligned center">
            <a href="https://github.com/keiichiwatanuki">
              <button className="ui icon button circular massive">
                <i class="github icon" />
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
