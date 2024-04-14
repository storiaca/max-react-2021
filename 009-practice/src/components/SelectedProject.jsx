import React from "react";

function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  return (
    <div>
      <header>
        <div className="">
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p>{project.date}</p>
        <p>Description</p>
      </header>
      TASKS
    </div>
  );
}

export default SelectedProject;
