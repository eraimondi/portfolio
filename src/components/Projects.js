// a project should have an image, a description, and a link
//maybe a grid or an ordered list?

import React from "react";

const Projects = ({ item }) => {
  return (
    <div className="card project-title">
      <img src={item.imageUrl} alt={item.imageAlt} />
      <div className="container">
        <h4>
          <b>{item.title}</b>
        </h4>
        <a href={item.link}>
          <p>{item.description}</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
