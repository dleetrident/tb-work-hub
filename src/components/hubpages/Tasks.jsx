import { useContext, useEffect } from "react";
import { useState } from "react";
import Page from "../../ui/Page";
import classes from "./Tasks.module.css";
import PlusImgSmall from "../../Assets/PlusImgSmall.png";
import TaskContext from "../../store/task-context";

const Tasks = () => {
  const taskCtx = useContext(TaskContext);
  const { taskList, addTask, amendTask, updateTick, sendTasks } = taskCtx;

  const handleAddTask = () => {
    const taskObj = { name: "Task", checked: false, id: Math.random() };
    addTask(taskObj);
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    const id = event.target.id;

    amendTask(name, id);

    console.log();
  };
  const handleCheckboxChange = (event) => {
    updateTick(event.target.id);
    console.log(taskList);
  };

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    const type = typeof tasks;
    console.log(type);
    if (type === "string") {
      sendTasks(JSON.parse(tasks));
    }
  }, []);

  return (
    <Page heading="Tasks">
      {taskCtx.taskList.length > 0 &&
        taskCtx.taskList.map((task, index) => {
          return (
            <div key={task.id} id={task.id} className={classes.inputdiv}>
              <input
                className={classes.textinput}
                type="text"
                onChange={handleNameChange}
                id={task.id}
                placeholder={
                  task.name === "Task" ? `${task.name} ${index + 1}` : task.name
                }></input>
              <input
                className={`${classes.checkinput} ${
                  task.checked === true && classes.tick
                }`}
                type="checkbox"
                onChange={handleCheckboxChange}
                id={task.id}
              />
            </div>
          );
        })}
      <img
        className={classes.photo}
        src={PlusImgSmall}
        alt=""
        onClick={handleAddTask}
      />
    </Page>
  );
};

export default Tasks;
