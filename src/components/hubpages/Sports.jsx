const { useEffect, useRef, useState } = require("react");
const { default: Page } = require("../../ui/Page");

const Sports = () => {
  const stats = require("../../rss/I1.json");
  const teamSearchRef = useRef();
  const [resultsList, setResultsList] = useState([]);
  const [losingTeams, setLosingTeams] = useState([]);
  const [team, setTeam] = useState("");

  useEffect(() => {
    const newStats = stats.map((x) => {
      let home = x.HomeTeam;
      let away = x.AwayTeam;
      let result = x.FTR;
      let winningTeam;
      let losingTeam;
      if (result === "H") {
        winningTeam = home.toLowerCase();
        losingTeam = away.toLowerCase();
        result = "at Home";
      } else if (result === "A") {
        winningTeam = away.toLowerCase();
        losingTeam = home.toLowerCase();
        result = "Away";
      } else {
        winningTeam = "draw";
        losingTeam = "draw";
      }
      return { home, away, result, winningTeam, losingTeam };
    });
    setResultsList(newStats);
  }, [stats]);

  const handleTeamSearch = (e) => {
    e.preventDefault();
    const teamSearch = teamSearchRef.current.value.toLowerCase();
    setTeam(teamSearch[0].toUpperCase() + teamSearch.slice(1).toLowerCase());
    setLosingTeams(
      resultsList.filter((x) => {
        if (x.winningTeam === teamSearch) {
          return x.losingTeam;
        } else {
          return false;
        }
      })
    );
  };
  return (
    <Page heading="Sports">
      <h2>Italian Football Results</h2>
      <p>2017/18 Season</p>

      <form onSubmit={handleTeamSearch}>
        <input ref={teamSearchRef}></input>
        <button>Find Wins</button>
      </form>
      <h3>{team}</h3>
      <ol>
        {losingTeams.map((x) => {
          return (
            <li key={`${x.losingTeam}${x.result}`}>
              {x.winningTeam[0].toUpperCase() +
                x.winningTeam.slice(1).toLowerCase()}
              &nbsp; beat &nbsp;
              {x.losingTeam[0].toUpperCase() +
                x.losingTeam.slice(1).toLowerCase()}
              &nbsp;
              {x.result}
            </li>
          );
        })}
      </ol>
    </Page>
  );
};

export default Sports;
