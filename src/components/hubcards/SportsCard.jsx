import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import classes from "./SportsCard.module.css";

const SportsCard = () => {
  const stats = require("../../rss/I1.json");
  const random = Math.ceil(Math.random() * 380);
  const randomData = stats[random];
  const { HomeTeam, AwayTeam, FTR, Date } = randomData;
  const [winTeam, setWinTeam] = useState("");
  useEffect(() => {
    if (FTR === "H") {
      setWinTeam(`${HomeTeam} Wins!`);
    } else if (FTR === "A") {
      setWinTeam(`${AwayTeam} Wins!`);
    } else {
      setWinTeam("It's a Draw...");
    }
  }, [FTR, HomeTeam, AwayTeam]);
  return (
    <Card cardHeader="Sports">
      <h4>
        {HomeTeam} vs {AwayTeam}
      </h4>
      <p>{Date}</p>
      <p>{winTeam}</p>
    </Card>
  );
};

export default SportsCard;
