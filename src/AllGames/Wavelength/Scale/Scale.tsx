import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import './Scale.css';
import { useEffect, useState } from 'react';

type ScaleProps = {
  value: number;
  setValue: (value: number) => void;
  totalGuesses: number;
  setIsGameOver: (value: boolean) => void;
  checkGuess: () => void;
};

export default function Scale({ value, setValue, totalGuesses, setIsGameOver, checkGuess}: ScaleProps) {
  const [inputText, setInputText] = useState<string>(String(value));

  useEffect(() => {
    console.log('Scale mounted');
    return () => console.log('Scale unmounted');
  }, []);

  useEffect(() => {
    setInputText(String(value));
  }, [value]);

  const clamp = (n: number) => Math.max(0, Math.min(100, n));

  // let user type freely, commit on blur or Enter
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const txt = e.target.value;
    if (/^\d{0,3}$/.test(txt)) setInputText(txt);
  }

  function commitInput() {
    if (inputText === '') {
      setInputText(String(value));
      return;
    }
    const n = Number(inputText);
    const v = clamp(Number.isNaN(n) ? value : n);
    setValue(v);                
    setInputText(String(v));    
  }

  return (
    <div className="scale">
      <div className="scale-header">
        <h2>Scale</h2>
        <p>Drag the slider or type a number (0–100).</p>
      </div>

      <div className="scale-body">
        <div className="scale-input-group">
          <label htmlFor="scaleInput">Value</label>
          <input
            id="scaleInput"
            className="scale-input"
            type="number"
            min={0}
            max={100}
            step={1}
            value={inputText}
            onChange={onInputChange}
            onBlur={commitInput}
            onKeyDown={(e) => e.key === 'Enter' && commitInput()}
          />

          <button type="button" disabled={totalGuesses !== 3} onClick={(e) => {e.preventDefault();commitInput(); checkGuess(); setIsGameOver(true)}}>
            Submit Guess
          </button>
        </div>

        <div className="scale-slider-wrapper">
          <div className="scale-label top">Best</div>
          <Stack sx={{ height: 300 }} spacing={2} direction="row" alignItems="center">
            <Slider
              className="temperature-slider"
              orientation="vertical"
              value={value}          
              min={0}
              max={100}
              step={1}
              valueLabelDisplay="on"
              onChange={(_, newValue) => {
                const v = clamp(newValue as number);
                setValue(v);     
                setInputText(String(v));
              }}
            />
          </Stack>
          <div className="scale-label bottom">Worst</div>
        </div>
      </div>
    </div>
  );
}