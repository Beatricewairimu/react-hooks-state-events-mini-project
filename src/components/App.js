import React, { useState } from 'react';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Buy rice', category: 'Food' },
    { text: 'Save a tenner', category: 'Money' },
    { text: 'Build a todo app', category: 'Code' },
  ]);

  const handleDelete = (textToDelete) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.text !== textToDelete));
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(task.text)}
        />
      ))}
    </div>
  );
}

export default App;
