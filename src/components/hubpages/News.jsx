import { useEffect } from "react";
import { useState } from "react";
import Page from "../../ui/Page";
import classes from "./News.module.css";
import useGetNews from "../../hooks/useGetNews";
import { RSSProps } from "react-rss/types";

const News = () => {
  const data = useGetNews();
  const [news, setNews] = useState();
  const newsMap = [0, 1, 2];
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
    <Page heading="News">
      {newsMap.map((indexNum) => {
        return (
          <div className={classes.container}>
            <img
              className={classes.icon}
              src={news && news.rss.channel.item[indexNum].enclosure.url}
              alt="img"
            />
            <div className={classes.textcontainer}>
              <h2>{news && news.rss.channel.item[indexNum].title}</h2>
              <p>{news && news.rss.channel.item[indexNum].description}</p>
            </div>
          </div>
        );
      })}
    </Page>
  );
};

export default News;
