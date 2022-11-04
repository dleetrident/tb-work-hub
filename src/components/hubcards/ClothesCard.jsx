import useGetNews from "../../hooks/useGetNews";
import Card from "../../ui/Card";
import classes from "./NewsCard.module.css";

const ClothesCard = (props) => {
  const data = useGetNews();
  return (
    <Card cardHeader="Clothes">
      <div className={classes.container}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </Card>
  );
};

export default ClothesCard;
