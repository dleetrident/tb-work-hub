import useGetNews from "../../hooks/useGetNews";
import Card from "../../ui/Card";

const NewsCard = (props) => {
  const data = useGetNews();
  return (
    <Card cardHeader="News">
      <h6>{data.title}</h6>
      <p>{data.description}</p>
    </Card>
  );
};

export default NewsCard;
