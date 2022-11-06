import Card from "../../ui/Card";
import classes from "./TasksCard.module.css";
import TaskContext from "../../store/task-context";
import { useContext, useEffect } from "react";
import { auth } from "../../firebase";
import AuthContext from "../../store/auth-context";

const TasksCard = () => {
  const taskCtx = useContext(TaskContext);
  const authCtx = useContext(AuthContext);
  console.log(taskCtx.taskList.slice(0, 3));
  useEffect(() => {
    const tasks = localStorage.getItem(authCtx.userName);
    const type = typeof tasks;
    if (type === "string") {
      taskCtx.sendTasks(JSON.parse(tasks));
    }
  }, [authCtx]);
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
