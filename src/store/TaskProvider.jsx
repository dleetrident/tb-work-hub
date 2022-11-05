import TaskContext from "./task-context";
import { useReducer } from "react";

const defaultTaskState = {
  taskList: [{ name: "Task", checked: false, id: Math.random() }],
};

const taskReducer = (state, action) => {
  let list = state.taskList;
  if (action.type === "SEND") {
    return { taskList: action.tasks };
  }
  if (action.type === "ADD") {
    let updatedList = [...list, action.task];
    localStorage.setItem("tasks", JSON.stringify(updatedList));
    return { taskList: updatedList };
  }
  if (action.type === "AMEND") {
    list.map((task) => {
      if (task.id.toString() === action.id) {
        console.log("id match", task.name, action.name);
        return (task.name = task.name.replace(task.name, action.name));
      } else {
        return task;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(list));
    return {
      taskList: list,
    };
  }
  if (action.type === "TICK") {
    list.map((task) => {
      if (task.id.toString() === action.id) {
        return (task.checked = !task.checked);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(list));
    return {
      taskList: list,
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
    dispatchTaskAction({ type: "ADD", task: task });
  };
  const removeHandler = (id) => {
    dispatchTaskAction({ type: "REMOVE", id: id });
  };
  const amendHandler = (name, id) => {
    dispatchTaskAction({ type: "AMEND", name: name, id: id });
  };
  const tickHandler = (id) => {
    dispatchTaskAction({ type: "TICK", id: id });
  };
  const sendHandler = (tasks) => {
    console.log(tasks);
    dispatchTaskAction({ type: "SEND", tasks: tasks });
  };
  const taskContext = {
    taskList: taskState.taskList,
    addTask: addHandler,
    removeTask: removeHandler,
    amendTask: amendHandler,
    updateTick: tickHandler,
    sendTasks: sendHandler,
  };
  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
