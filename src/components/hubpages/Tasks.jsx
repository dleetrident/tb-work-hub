import { useContext, useEffect } from "react";
import { useState } from "react";
import Page from "../../ui/Page";
import classes from "./News.module.css";
import useGetNews from "../../hooks/useGetNews";
import PlusImgSmall from "../../Assets/PlusImgSmall.png";
import TaskContext from "../../store/task-context";

const Tasks = () => {
  const taskCtx = useContext(TaskContext);
  const { taskList, addTask } = taskCtx;

  const handleAddTask = () => {
    const taskObj = { name: "Task", checked: false, id: Math.random() };
    addTask(taskObj);
  };

  const handleNameChange = (event) => {
    const nameChanger = taskList.find((task) => {
      return task.id === event.target.id;
    });
    console.log(nameChanger);
  };
  const checkboxChangeHandler = (event) => {
    console.log(event);
  };

  return (
    <Page heading="Tasks">
      {taskCtx.taskList.map((task) => {
        return (
          <div key={task.id} id={task.id}>
            <input
              type="text"
              onChange={handleNameChange}
              id={task.id}
              placeholder={task.name}></input>
            <input
              type="checkbox"
              onChange={checkboxChangeHandler}
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
