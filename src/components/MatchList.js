import React from 'react';
import Match from './Match';

const MatchList = (props) => {
  const matches = props.matchData.map((match) => {
    return (
      <Match
        key={match.matchNumber}
        players={match.players}
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    );
  });

  return (
    <section className='PlayerList MatchList'>
      <h1>Match List</h1>
      {matches}
    </section>
  );
};

export default MatchList;