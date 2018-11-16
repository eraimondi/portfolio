import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Well,
  Button,
  Glyphicon
} from "react-bootstrap";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
//projects will recieve as props an array of projects...were are the coming from?

const projects = [
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
      <Grid style={{ background: "#FFF" }}>
        <Row className="show-grid">
          <Col>
            <Navigation />
            <Jumbotron
              style={{
                textAlign: "center"
              }}
            >
              <img
                src={this.state.image ? this.me : this.anonymous}
                alt="me"
                onMouseOver={() => this.setState({ image: true })}
                onMouseLeave={() => this.setState({ image: false })}
                style={{
                  width: "100px",
                  height: "auto",
                  borderRadius: "50%"
                }}
              />
              <h1>My porfolio</h1>
              <p>I'm a paragraph</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="show-grid2">
          <Col>
            <section id="welcome-section">
              <h1
                onMouseOver={() => this.setState({ welcome: true })}
                onMouseLeave={() => this.setState({ welcome: false })}
              >
                {this.state.welcome ? (
                  <img src="http://iddp.com/wp-content/uploads/2016/08/hire_me.jpg" />
                ) : (
                  "Welcome to My portfolio, please hover over me, if you dare"
                )}
              </h1>
            </section>
          </Col>
        </Row>
        <Row className="show-grid3">
          <section id="projects">
            <h1 style={{ textAlign: "center" }}>Projects</h1>
            {projects.map((item, index) => (
              <Col
                key={index}
                style={{ padding: "10px 10px 10px 10px" }}
                md={5}
                mdPush={2}
              >
                <Projects item={item} />
              </Col>
            ))}
          </section>
        </Row>
        <Row>
          <a
            className="contact-details"
            style={{ margin: "10px 50% 10px 50%" }}
            href="https://github.com/keiichiwatanuki"
          >
            Github
          </a>
        </Row>
      </Grid>
    );
  }
}

export default App;
