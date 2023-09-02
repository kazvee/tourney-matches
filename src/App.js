import "./App.css";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import matchData from "./data/matchData";

const App = (props) => {
  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments meet their Match!</span>
      </h1>
      <PlayerList matchData={matchData} />
      <MatchList matchData={matchData} />
    </div>
  );
};

export default App;