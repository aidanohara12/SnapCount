import { useCallback, useMemo, useState } from 'react';
import './GuessThePlayer.css';
import type { Player } from '../../Models/Players';
import { players } from '../../Models/Players';
import Select from 'react-select';
import { PlayerGuess } from './PlayerGuess/PlayerGuess';

function GuessThePlayer() {
  const [guesses, setGuesses] = useState<Player[]>([]);
  const [selectedOption, setSelectedOption] = useState<{ value: Player; label: string } | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [wonGame, setWonGame] = useState(false);


   const pickRandom = useCallback(
    () => players[Math.floor(Math.random() * players.length)],
    []
  );
  
  const [correctPlayer, setCorrectPlayer] = useState<Player>(pickRandom);

  const options = useMemo(
      () =>
        [...players]
          .sort((a, b) => a.lastName.localeCompare(b.lastName))
          .map(p => ({ value: p, label: `${p.firstName} ${p.lastName}` })),
      []
    );

  function selectChanged(option: { value: Player } | null) {
    if (!option || isGameOver) return;
    const p = option.value;

    setGuesses(prev => {
      const next = [...prev, p];

      if (p === correctPlayer) {
        setWonGame(true);
        setIsGameOver(true);
      } else if (next.length >= 7) { 
        setWonGame(false);
        setIsGameOver(true);
      }

      return next;
    });

    setSelectedOption(null); 
  }

  function resetGame() {
    setGuesses([]);
    setWonGame(false);
    setIsGameOver(false);
    setSelectedOption(null);
    setCorrectPlayer(pickRandom());
  }

  return (
    <div className='guess-the-player'>
      <h1 className='guess-the-player-title'>Guess the Player</h1>
      <h5 className='guess-the-player-subtitle'>Try and Guess the Player! You have {7 - guesses.length} guesses left.</h5>
        
      {(isGameOver && wonGame) && <div className='guess-the-player-game-over'>
        <h3>Game Over You Won!</h3>
        <button onClick={resetGame}>Play Again</button>
      </div>}

      {(isGameOver && !wonGame) && <div className='guess-the-player-game-over'>
        <h3>Game Over - You Lose :(</h3>
        <h4>The correct player was {correctPlayer.firstName} {correctPlayer.lastName}</h4>
        <button onClick={resetGame}>Play Again</button>
      </div>}

      <div className='guess-the-player-search'>
        <Select
          options={options}
          value={selectedOption}
          onChange={selectChanged}
          placeholder="Search a player..."
          isClearable
          isDisabled={isGameOver}
        />
      </div>


      <div>
        {guesses.length > 0 && 
        <div className='guess-the-player-table'>
          <h4>Name</h4>
          <h4>Team</h4>
          <h4>Division</h4>
          <h4>Position</h4>
          <h4>Height</h4>
          <h4>Age</h4>
          <h4>Number</h4>
        </div>
        }
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