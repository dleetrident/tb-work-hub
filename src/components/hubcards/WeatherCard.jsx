import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import classes from "./WeatherCard.module.css";

const WeatherCard = (props) => {
  const [loc, setLoc] = useState({
    lat: 0,
    long: 0,
  });
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [city, setCity] = useState();

  const fetchHeroes = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.long}&units=metric&APPID=8802d4272ab9bfc1d6221ad1eb6895ee`
      );
      const data = await response.json();

      //   Object.entries(data).map((entry) => ({
      //   [entry[0]]: entry[1],
      // }));
      setWeather(data.weather[0].icon);
      setTemp(data.main.temp);
      setCity(data.name.split("-").join(" "));
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
    });
    fetchHeroes();
  }, [loc.lat, loc.long]);

  return (
    <Card cardHeader="Weather">
      <div className={classes.flexcontainer}>
        <img
          className={classes.icon}
          src={`http://openweathermap.org/img/wn/${weather}@2x.png`}
          alt="weather"
        />
        <p className={classes.temp}>{`${temp}`}&#8451;</p>
      </div>

      <p className={classes.city}>{city}</p>
    </Card>
  );
};

export default WeatherCard;
