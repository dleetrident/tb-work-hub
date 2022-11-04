import TaskContext from "./task-context";
import { useReducer } from "react";

const defaultTaskState = {
  taskList: [{ name: "Task", checked: false, id: Math.random() }],
};

const taskReducer = (state, action) => {
  let updatedTaskState;
  if (action.type === "ADD") {
    let list = state.taskList;
    let updatedList = [...list, action.task];
    return { taskList: updatedList };
  }
  if (action.type === "REMOVE") {
    updatedTaskState = false;
    return {
      authState: updatedTaskState,
    };
  }

  return defaultTaskState;
};

const TaskProvider = (props) => {
  const [taskState, dispatchTaskAction] = useReducer(
    taskReducer,
    defaultTaskState
  );
  const addHandler = (task) => {
    console.log(task);
    dispatchTaskAction({ type: "ADD", task: task });
  };
  const removeHandler = (id) => {
    dispatchTaskAction({ type: "REMOVE", id: id });
  };

  const taskContext = {
    taskList: taskState.taskList,
    addTask: addHandler,
    removeTask: removeHandler,
  };
  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
