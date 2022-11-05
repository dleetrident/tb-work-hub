import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Card from "../ui/Card";
import WeatherCard from "./hubcards/WeatherCard";
import classes from "./MainHub.module.css";
import { Link } from "react-router-dom";
import NewsCard from "./hubcards/NewsCard";
import SportsCard from "./hubcards/SportsCard";
import PhotosCard from "./hubcards/PhotosCard";
import TasksCard from "./hubcards/TasksCard";
import ClothesCard from "./hubcards/ClothesCard";

const MainHub = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.container}>
      <h1>{`Good Day ${authCtx.userName}`}</h1>
      <div className={classes.gridcontainer}>
        <WeatherCard></WeatherCard>
        <Link to="/news" style={{ textDecoration: "none", color: "black" }}>
          <NewsCard cardHeader="News" id="news" />
        </Link>
        <Link to="/sports" style={{ textDecoration: "none", color: "black" }}>
          <SportsCard id="sports" />
        </Link>
        <Link to="/photos" style={{ textDecoration: "none", color: "black" }}>
          <PhotosCard id="photos" />
        </Link>
        <Link to="/tasks" style={{ textDecoration: "none", color: "black" }}>
          <TasksCard id="tasks" />
        </Link>

        <ClothesCard id="clothes" />
      </div>
    </div>
  );
};

export default MainHub;
