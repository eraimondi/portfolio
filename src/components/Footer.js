import React from "react";

const Footer = () => {
  return (
    <footer className="ui padded segment">
      <h1 style={{ textAlign: "center" }}>Find me on: </h1>
      <div id="buttons">
        <a href="https://github.com/keiichiwatanuki">
          <button className="ui icon button circular massive center align">
            <i className="github icon" />
            Github
          </button>
        </a>

        <a href="mailto:edu.d.rai@gmail.com">
          <button className="ui icon button google plus circular massive">
            <i className="google icon" />
            mail
          </button>
        </a>
        <a href="https://www.linkedin.com/in/raimondieduardo/">
          <button className="ui icon button linkedin circular massive">
            <i className="linkedin icon" />
            Linkedin
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
