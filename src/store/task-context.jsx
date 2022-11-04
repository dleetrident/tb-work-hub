import React from "react";

const TaskContext = React.createContext({
  taskList: [{ name: "Task", checked: false, id: Math.random() }],
});

export default TaskContext;
