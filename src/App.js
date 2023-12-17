import React, { useState } from 'react';
import './App.css';

function App() {
  const [numPlayers, setNumPlayers] = useState(2);
  const [players, setPlayers] = useState(Array.from({ length: 2 }, (_, index) => `Player ${index + 1}`));
  const [teamResults, setTeamResults] = useState({ team1: [], team2: [] });

  const updatePlayers = (event) => {
    const newNumPlayers = parseInt(event.target.value, 10);
    setNumPlayers(newNumPlayers);
    setPlayers(Array.from({ length: newNumPlayers }, (_, index) => `Player ${index + 1}`));
  };

  const handlePlayerChange = (index, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = value;
    setPlayers(updatedPlayers);
  };

  const randomizeTeams = () => {
    const randomizedPlayers = [...players].sort(() => Math.random() - 0.5);
    const teamSize = numPlayers % 2 === 0 ? numPlayers / 2 : Math.ceil(numPlayers / 2);

    const team1 = randomizedPlayers.slice(0, teamSize);
    const team2 = randomizedPlayers.slice(teamSize);

    setTeamResults({ team1, team2 });
  };

    return (
    <div className="container">
      <label htmlFor="numPlayers">Number of Players:</label>
      <input
        type="number"
        id="numPlayers"
        min="2"
        value={numPlayers}
        onChange={updatePlayers}
      />

      <div id="playersContainer">
        {players.map((player, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Player ${index + 1}`}
            value={player}
            onChange={(e) => handlePlayerChange(index, e.target.value)}
          />
        ))}
      </div>

      <button onClick={randomizeTeams}>Randomize Teams</button>

      <div id="teamResults">
        <p>Team 1: {teamResults.team1.join(", ")}</p>
        <p>Team 2: {teamResults.team2.join(", ")}</p>
      </div>

      <div className="contact-info">
        <a href="https://hashtagbasketball.com/" target="_blank" rel="noopener noreferrer"># Basketball</a>
        <a href="https://github.com/konpeki02" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.nba.com/fantasy" target="_blank" rel="noopener noreferrer">Fantasy</a>
      </div>


      <div className="signature">
        <p>Made by Tony </p>
      </div>
    </div>
  );
}

export default App;