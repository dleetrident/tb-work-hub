import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Card from "../ui/Card";
import classes from "./MainHub.module.css";

const MainHub = () => {
  const authCtx = useContext(AuthContext);

  const [loc, setLoc] = useState({
    lat: 0,
    long: 0,
  });
  const [weather, setWeather] = useState({});

  const fetchHeroes = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=52.18304&lon=-1.687552&units=metric&APPID=8802d4272ab9bfc1d6221ad1eb6895ee`
      );
      const data = await response.json();

      //   Object.entries(data).map((entry) => ({
      //   [entry[0]]: entry[1],
      // }));
      setWeather(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLoc({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      console.log(loc.lat, loc.long);
    });
    fetchHeroes();
  }, [loc.lat, loc.long]);
  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <div className={classes.container}>
      <h1>{`Good Day ${authCtx.userName}`}</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
        className={classes.gridcontainer}>
        <Card cardHeader="Weather" />
        <Card cardHeader="News" />
        <Card cardHeader="Sport" />
        <Card cardHeader="Photos" />
        <Card cardHeader="Tasks" />
        <Card cardHeader="Clothes" />
      </div>
    </div>
  );
};

export default MainHub;
