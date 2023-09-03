import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import matchData from "./data/matchData";
import playerData from "./data/playerData";
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";

const App = (props) => {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments meet their Match!</span>
      </h1>
      <PlayerList playerData={parsedPlayerData} />
      <MatchList matchData={matchData} />
    </div>
  );
};

export default App;