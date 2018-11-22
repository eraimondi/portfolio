import React, { Component } from "react";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
//projects will recieve as props an array of projects...were are the coming from?

//TODO add a media query to correctly view on a phone?

const projects = [
  {
    imageAlt: "Avatar",
    url: "https://keiichiwatanuki.github.io/portfolio/",
    description: "A presentation of some of my past projects",
    title: "This site",
    link: "https://keiichiwatanuki.github.io/portfolio/"
  },
  {
    imageAlt: "Avatar",
    url: "https://sickfits-keiichi-next-prod.herokuapp.com/",
    description:
      "An e-commerce app, from wesboss react-advanced course, I have implemented mercadopago into it",
    title: "Sick-Fits",
    link: "https://sickfits-keiichi-next-prod.herokuapp.com/"
  },
  {
    imageAlt: "Avatar",
    imageUrl: "https://i.imgur.com/oW1dGDI.jpg",
    description: "I'm a mockup project",
    title: "Mockup",
    link: "http://google.com"
  },
  {
    imageAlt: "Avatar",
    imageUrl: "https://i.imgur.com/oW1dGDI.jpg",
    description: "I'm a mockup project",
    title: "Mockup",
    link: "http://google.com"
  },
  {
    imageAlt: "Avatar",
    imageUrl: "https://i.imgur.com/oW1dGDI.jpg",
    description: "I'm a mockup project",
    title: "Mockup",
    link: "http://google.com"
  },
  {
    imageAlt: "Avatar",
    imageUrl: "https://i.imgur.com/oW1dGDI.jpg",
    description: "I'm a mockup project",
    title: "Mockup",
    link: "http://google.com"
  }
];

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
      <div className="ui container">
        <Navigation />
        <div className="ui segment" style={{ marginTop: "55px" }}>
          <img
            src={this.state.image ? this.me : this.anonymous}
            alt="me"
            onMouseOver={() => this.setState({ image: true })}
            onMouseLeave={() => this.setState({ image: false })}
            className="ui centered image circular small "
          />
          <h1 className="ui header centered">My porfolio</h1>
          <p style={{ textAlign: "center" }}>I'm a paragraph</p>
        </div>

        <section id="welcome-section" className="ui segment">
          <h1
            onMouseOver={() => this.setState({ welcome: true })}
            onMouseLeave={() => this.setState({ welcome: false })}
          >
            {this.state.welcome ? (
              <img
                className="ui image centered medium"
                src="http://iddp.com/wp-content/uploads/2016/08/hire_me.jpg"
                alt="me"
              />
            ) : (
              "Welcome to My portfolio, please hover over me, if you dare"
            )}
          </h1>
        </section>
        <div className="ui segment">
          <h1 className="ui header centered">Projects</h1>
          <section
            id="projects"
            className="ui grid three column stackable doubling"
          >
            {projects.map((item, index) => (
              <Projects key={index} item={item} />
            ))}
          </section>
        </div>
        <div className="ui segment">
          <a
            className="contact-details"
            href="https://github.com/keiichiwatanuki"
            id="profile-link"
            target="blank"
          >
            Github
          </a>
        </div>
      </div>
    );
  }
}

export default App;
