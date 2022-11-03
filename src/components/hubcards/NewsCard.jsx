import useGetNews from "../../hooks/useGetNews";
import Card from "../../ui/Card";
import classes from "./NewsCard.module.css";

const NewsCard = (props) => {
  const data = useGetNews();
  return (
    <Card cardHeader="News">
      <div className={classes.container}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </Card>
  );
};

export default NewsCard;
