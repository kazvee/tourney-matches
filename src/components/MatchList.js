import React from "react";
import Match from "./Match";

const MatchList = (props) => {

  const oneMatch = props.matchData[0];

  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} />
    </section>
  );
};

export default MatchList;