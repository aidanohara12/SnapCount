import { useMemo, useState } from 'react';
import './GuessThePlayer.css';
import type { Player } from '../../Models/Players';
import { players } from '../../Models/Players';
import Select from 'react-select';
import { PlayerGuess } from './PlayerGuess/PlayerGuess';

function GuessThePlayer() {
  const [guesses, setGuesses] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(players[0]);

  // Pick a correct player once per mount
  const correctPlayer = useMemo(() => {
    const idx = Math.floor(Math.random() * players.length);
    return players[idx];
  }, []);

  function selectChanged(option: { value: Player } | null) {
    if (!option) return;
    const p = option.value;
    setCurrentPlayer(p);
    setGuesses(prev => [p, ...prev]); // add to the top (or [...prev, p] for bottom)
  }

  return (
    <div>
      <h1>Guess the Player</h1>
      <h5>Try and Guess the Player!</h5>

      <div>
        <Select
          options={players.map((p: Player) => ({
            value: p,
            label: `${p.firstName} ${p.lastName}`,
          }))}
          onChange={selectChanged}
          placeholder="Search a player..."
        />
      </div>

      <div>
        {guesses.map((p, idx) => (
          <PlayerGuess
            key={`${p.firstName}-${p.lastName}-${idx}`}
            player={p}
            correctPlayer={correctPlayer}
          />
        ))}
      </div>
    </div>
  );
}

export default GuessThePlayer;