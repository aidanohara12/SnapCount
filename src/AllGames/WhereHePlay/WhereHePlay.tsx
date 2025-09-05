import { useMemo, useState } from "react";
import { players } from "../../Models/WhereHePlayer";
import type { WhereHePlayer } from "../../Models/WhereHePlayer";
import Select from 'react-select';
import Path from "./Path/Path";
import "./WhereHePlay.css";

type Option = { value: WhereHePlayer; label: string };

function WhereHePlay() {
  const [whereHePlayer, setWhereHePlayer] = useState<WhereHePlayer>(
    () => players[Math.floor(Math.random() * players.length)]
  );
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [guesses, setGuesses] = useState(0);
  const [guessedPlayers, setGuessedPlayers] = useState<WhereHePlayer[]>([]);

  const options = useMemo<Option[]>(
    () =>
      [...players]
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map(p => ({ value: p, label: `${p.firstName} ${p.lastName}` })), [whereHePlayer]
  );

  function checkGuess(option: Option | null) {
    if (!option || isGameOver) return;

    const picked = option.value;

    setGuessedPlayers(prev => [...prev, picked]);
    setSelectedOption(null);
    const isCorrect =
      picked.firstName === whereHePlayer.firstName &&
      picked.lastName === whereHePlayer.lastName;

    setGuesses(prev => {
      const next = prev + 1;

      if (isCorrect) {
        setWonGame(true);
        setIsGameOver(true);
      } else if (next >= 3) {
        setWonGame(false);
        setIsGameOver(true);
      }

      return next;
    });
  }

  function displayPlayerName() {
    if (isGameOver) {
      return whereHePlayer.firstName + " " + whereHePlayer.lastName;
    } else {
      return "???";
    }
  }

  function resetGame() {
    setGuesses(0);
    setWonGame(false);
    setIsGameOver(false);
    setSelectedOption(null);
    setWhereHePlayer(players[Math.floor(Math.random() * players.length)]);
    setGuessedPlayers([]);
  }


  return (
    <div className="where-he-play">
      <h2>Where'd He Play?</h2>
      <h4>Guess the player based on their career paths!</h4>

      <div className="where-he-play-search">
        <Select
          options={options}
          value={selectedOption}
          onChange={checkGuess}
          placeholder="Search a player..."
          isClearable
          isDisabled={isGameOver}
        />
      </div>

      <div className="where-he-play-path">
        <h3>Career Path</h3>
        <Path player={whereHePlayer} />
        <h3>Mystery Player: {displayPlayerName()}</h3>
      </div>

      {guessedPlayers.length > 0 && !isGameOver && <div className="guessed-players">
        <h2>Guessed Players</h2>
        <ul>
          {guessedPlayers.map(p => <li key={p.lastName}>{p.firstName} {p.lastName}</li>)}
        </ul>
      </div>}



      {isGameOver && <div className="where-he-play-game-over">
        {wonGame && <div className="where-he-play-game-over">
          <h3>Game Over! You Won!</h3>
          <button onClick={resetGame}>Play Again</button>
        </div>}
        {!wonGame && <div className="where-he-play-game-over">
          <h3>Game Over - You Lose :(</h3>
          <h4>The correct player was {whereHePlayer.firstName} {whereHePlayer.lastName}</h4>
          <button onClick={resetGame}>Play Again</button>
        </div>}
      </div>}

    </div>
  );
}

export default WhereHePlay;

