// a project should have an image, a description, and a link
//maybe a grid or an ordered list?

import React from "react";

const Projects = ({ item }) => {
  return (
    <div className="column">
      <a href={item.link}>
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
            <h4 style={{ textAlign: "center" }}>
              <b>{item.title}</b>
            </h4>
            <p style={{ textAlign: "left" }}>{item.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Projects;
