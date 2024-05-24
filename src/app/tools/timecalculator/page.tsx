"use client";

import React, { useState } from "react";

export default function Page() {
  const [totalTime, setTotalTime] = useState(0);
  const [inputSeconds, setInputSeconds] = useState("0");
  const [inputMinutes, setInputMinutes] = useState("0");

  const handleInputMinutesChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMinutes(event.target.value);
  };
  const handleInputSecondsChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputSeconds(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const minutes = parseInt(inputMinutes ?? 0, 10);
    const seconds = parseInt(inputSeconds ?? 0, 10);
    const timeToAdd = minutes * 60 + seconds;

    if (!isNaN(timeToAdd)) {
      setTotalTime(totalTime + timeToAdd);
      setInputSeconds("0");
      setInputMinutes("0");
    }
  };

  const handleButtonClick = (operator: string) => {
    const minutes = parseInt(inputMinutes ?? 0, 10);
    const seconds = parseInt(inputSeconds ?? 0, 10);
    const timeToAdd = minutes * 60 + seconds;

    if (!isNaN(timeToAdd)) {
      if (operator === "+") {
        setTotalTime(totalTime + timeToAdd);
      } else if (operator === "-") {
        setTotalTime(totalTime - timeToAdd);
      }
    }

    setInputSeconds("0");
    setInputMinutes("0");
  };

  const handleReset = () => {
    setTotalTime(0);
  };

  // Fonction pour afficher le temps total sous forme d'heures:minutes:secondes
  const formatTotalTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className='flex justify-center items-center absolute inset-0'>
      <form
        onSubmit={(e)=>handleSubmit(e)}
        className=' rounded-md bg-neutral-300 text-black p-5'
      >
        <h1 className='text-2xl'>Simple time calculator</h1>
        <p>Secondes totales : {totalTime}</p>
        <p>
          Temps total :{" "}
          <span className='text-sky-600'>{formatTotalTime(totalTime)}</span>
        </p>
        <label>
          {" "}
          Minutes <br />
          <input
            type='number'
            name='calcTime'
            className='border-2 text-white rounded-sm p-1'
            value={inputMinutes}
            inputMode='numeric'
            pattern='[0-9]*'
            onChange={handleInputMinutesChange}
          />
        </label>
        <br />
        <label>
          {" "}
          Secondes <br />
          <input
            type='number'
            name='calcTime'
            className='border-2 text-white rounded-sm p-1'
            value={inputSeconds}
            inputMode='numeric'
            pattern='[0-9]*'
            onChange={handleInputSecondsChange}
          />
        </label>
        <div className='flex justify-center items-center py-3'>
          <input
            type='submit'
            value='+'
            className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'
            // onClick={() => handleButtonClick("+")}
          />
          <button
            className='bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded'
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
          <button
            className='bg-teal-500 hover:bg-teal-700 font-bold py-2 px-4 rounded'
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
