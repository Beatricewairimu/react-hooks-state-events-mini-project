import React from "react";

const Task = ({ text, category }) => {
  return (
    <div data-testid="task" className="task">
      <p>{text}</p>
      <span>{category}</span>
    </div>
  );
};

export default Task;
