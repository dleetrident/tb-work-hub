import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Card from "../ui/Card";
import WeatherCard from "./hubcards/WeatherCard";
import classes from "./MainHub.module.css";
import { Link } from "react-router-dom";
import NewsCard from "./hubcards/NewsCard";
import SportsCard from "./hubcards/SportsCard";

const MainHub = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.container}>
      <h1>{`Good Day ${authCtx.userName}`}</h1>
      <div className={classes.gridcontainer}>
        <WeatherCard>
          <p>test content</p>
        </WeatherCard>
        <Link to="/news" style={{ textDecoration: "none", color: "black" }}>
          <NewsCard cardHeader="News" id="news" />
        </Link>
        <Link to="/sports" style={{ textDecoration: "none", color: "black" }}>
          <SportsCard id="sport" />
        </Link>

        <Card cardHeader="Photos" id="photos" />
        <Card cardHeader="Tasks" id="tasks" />
        <Card cardHeader="Clothes" id="clothes" />
      </div>
    </div>
  );
};

export default MainHub;
