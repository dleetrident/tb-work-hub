import Card from "../../ui/Card";
import classes from "./TasksCard.module.css";
import TaskContext from "../../store/task-context";
import { useContext, useEffect } from "react";

const TasksCard = () => {
  const taskCtx = useContext(TaskContext);
  console.log(taskCtx.taskList.slice(0, 3));
  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    const type = typeof tasks;
    if (type === "string") {
      taskCtx.sendTasks(JSON.parse(tasks));
    }
  }, []);
  return (
    <Card cardHeader="Tasks">
      <div className={classes.container}>
        {taskCtx.taskList.slice(0, 3).map((task, index) => {
          return (
            <div key={task.id} id={task.id} className={classes.inputdiv}>
              <input
                className={classes.textinput}
                type="text"
                id={task.id}
                placeholder={
                  task.name === "Task" ? `${task.name} ${index + 1}` : task.name
                }></input>
              <input
                className={`${classes.checkinput} ${
                  task.checked === true && classes.tick
                }`}
                type="checkbox"
                id={task.id}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default TasksCard;
