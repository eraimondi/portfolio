import React from "react";

const Header = props => {
  const me =
    "https://media.licdn.com/dms/image/C5603AQF3R-8fYvpVmg/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=lKBAK0n0-ah0-ju5nyv3rRpQXq1KYzidDQalhMMq-bc";
  const anonymous =
    "http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-fb-3.jpg";
  return (
    <div className="ui segment" id="top-header">
      <img
        src={props.image ? me : anonymous}
        alt="me"
        onMouseOver={() => props.toggleImageState()}
        onMouseLeave={() => props.toggleImageState()}
        className="ui centered image circular small "
      />
      <h1 className="ui centered">Eduardo Raimondi's Portfolio</h1>
      <p className="about-me">
        <b>
          React developer, currently walking the fullstack path with
          React,Apollo and Express
        </b>
      </p>
    </div>
  );
};

export default Header;
