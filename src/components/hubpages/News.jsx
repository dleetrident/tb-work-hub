import { useEffect } from "react";
import { useState } from "react";
import Page from "../../ui/Page";
import classes from "./News.module.css";
import useGetNews from "../../hooks/useGetNews";

const News = () => {
  const data = useGetNews();

  return (
    <Page heading="News">
      <img className={classes.icon} src={data.image} alt="weather" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </Page>
  );
};

export default News;
