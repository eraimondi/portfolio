// a project should have an image, a description, and a link
//maybe a grid or an ordered list?

import React from "react";

const Projects = ({ item }) => {
  return (
    <div className="column">
      <div className="ui segment">
        {item.imageUrl ? (
          <img
            className="ui large image"
            src={item.imageUrl}
            alt={item.imageAlt}
          />
        ) : (
          <div className="ui segment embed" style={{ height: "350px" }}>
            <iframe src={item.url} />
          </div>
        )}
        <div className="ui segment" style={{ height: "150px" }}>
          <h4>
            <b>{item.title}</b>
          </h4>
          <a href={item.link}>
            <p>{item.description}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
