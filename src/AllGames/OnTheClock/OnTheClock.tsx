import './OnTheClock.css'
import { useMemo, useState } from 'react'
import { onTheClockPlayers } from '../../Models/OnTheClockPlayer'
import type { OnTheClockPlayer } from '../../Models/OnTheClockPlayer'
import Select from 'react-select';
import DraftCard from './DraftCard/DraftCard'

type Option = { value: OnTheClockPlayer; label: string };

function OnTheClock() {
  const [onTheClockPlayer, setOnTheClockPlayer] = useState<OnTheClockPlayer>(
    () => onTheClockPlayers[Math.floor(Math.random() * onTheClockPlayers.length)]
  );
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [guesses, setGuesses] = useState(0);
  const [guessedPlayers, setGuessedPlayers] = useState<OnTheClockPlayer[]>([]); // <-- STATE

  function shuffle<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const options = useMemo<Option[]>(
    () =>
      shuffle(
        [...onTheClockPlayers]
          .sort((a, b) => a.lastName.localeCompare(b.lastName))
          .map(p => ({ value: p, label: `${p.firstName} ${p.lastName}` }))
      ),
    [onTheClockPlayer]
  );

  function checkGuess(option: Option | null) {
    if (!option || isGameOver) return;

    const picked = option.value;

    setGuessedPlayers(prev => [...prev, picked]);
    setSelectedOption(null);
    const isCorrect =
      picked.firstName === onTheClockPlayer.firstName &&
      picked.lastName === onTheClockPlayer.lastName;

    setGuesses(prev => {
      const next = prev + 1;

      if (isCorrect) {
        setCorrectGuess(true);
        setIsGameOver(true);
      } else if (next >= 3) {
        setCorrectGuess(false);
        setIsGameOver(true);
      }

      return next;
    });
  }

  function resetGame() {
    setGuesses(0);
    setIsGameOver(false);
    setCorrectGuess(false);
    setSelectedOption(null);
    setGuessedPlayers([]);
    setOnTheClockPlayer(
      onTheClockPlayers[Math.floor(Math.random() * onTheClockPlayers.length)]
    );
  }

  return (
    <div className='on-the-clock'>
      <h2>On The Clock</h2>
      <h4>Try and guess the player based on their draft card! You have {3 - guesses} guesses left.</h4>

      <div className='on-the-clock-search'>
        <Select
          options={options}
          value={selectedOption}
          placeholder="Search a player..."
          isClearable
          onChange={checkGuess}
          isDisabled={guesses >= 3}
        />

        <h3>Guessed Players</h3>
        {guessedPlayers.map((p, idx) => (
          <h4 key={`${p.firstName}-${p.lastName}-${idx}`}>
            {p.firstName} {p.lastName}
          </h4>
        ))}

        {isGameOver && (
          <div className='on-the-clock-game-over'>
            <h2 style={{color: "black", margin:"0px", textAlign:"center"}}>{correctGuess ? "Correct!"! : "Game Over!" }</h2>
            <h5>
              {correctGuess ? 'You Got It!' : 'The correct player was ' + onTheClockPlayer.firstName  + ' ' + onTheClockPlayer.lastName}
            </h5>
            <button onClick={resetGame}>Play Again</button>
          </div>
        )}
      </div>

      <div className='on-the-clock-draft-card'>
        <DraftCard player={onTheClockPlayer} isGameOver={isGameOver} guesses={guesses} />
      </div>
    </div>
  );
}

export default OnTheClock;