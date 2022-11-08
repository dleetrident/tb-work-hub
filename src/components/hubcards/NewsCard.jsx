import { useEffect, useState } from "react";
import useGetNews from "../../hooks/useGetNews";
import Card from "../../ui/Card";
import classes from "./NewsCard.module.css";

const NewsCard = (props) => {
  const data = useGetNews();
  const [news, setNews] = useState();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/newsfeed");

        const data = await response.json();
        const sendData = JSON.parse(data);

        setNews(sendData);
      } catch (error) {
        alert(error);
      }
    };
    fetchNews();
  }, []);
  useEffect(() => {
    console.log(news);
  }, [news]);
  return (
    <Card cardHeader="News">
      <div className={classes.container}>
        <img
          className={classes.icon}
          src={news && news.rss.channel.item[0].enclosure.url}
          alt="img"
        />
        <h2>{news && news.rss.channel.item[0].title}</h2>
      </div>
    </Card>
  );
};

export default NewsCard;
