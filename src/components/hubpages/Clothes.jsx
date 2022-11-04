import { useEffect } from "react";
import { useState } from "react";
import Page from "../../ui/Page";
import classes from "./News.module.css";
import useGetNews from "../../hooks/useGetNews";
import PhotoBG from "../../Assets/PhotoBG.png";

const Clothes = () => {
  const data = useGetNews();

  return (
    <Page heading="Photos">
      <img className={classes.photo} src={PhotoBG} alt="Photo" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </Page>
  );
};

export default Clothes;
