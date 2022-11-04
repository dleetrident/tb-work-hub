import useGetNews from "../../hooks/useGetNews";
import Card from "../../ui/Card";
import classes from "./NewsCard.module.css";

const TasksCard = (props) => {
  const data = useGetNews();
  return (
    <Card cardHeader="Tasks">
      <div className={classes.container}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </Card>
  );
};

export default TasksCard;
