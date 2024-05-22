'use client'

import React, { useState } from 'react';

export default function Page() {
    const [totalTime, setTotalTime] = useState(0);
    const [inputSeconds, setInputSeconds] = useState('');
    const [inputMinutes, setInputMinutes] = useState('');

    const handleInputMinutesChange = (event) => {
        setInputMinutes(event.target.value);
    };
    const handleInputSecondsChange = (event) => {
        setInputSeconds(event.target.value);
    };

    const handleButtonClick = (operator) => {
        const minutes = parseInt(inputMinutes ?? 0, 10);
        const seconds = parseInt(inputSeconds ?? 0, 10);
        const timeToAdd = minutes * 60 + seconds;
    
        if (!isNaN(timeToAdd)) {
            if (operator === '+') {
                setTotalTime(totalTime + timeToAdd);
            } else if (operator === '-') {
                setTotalTime(totalTime - timeToAdd);
            }
        }
    
        setInputSeconds('');
        setInputMinutes('');
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
        <main>
            <h1>Simple time calculator</h1>
            <p>Secondes totales : {totalTime}</p>
            <p>Temps total : <span className='text-sky-400'>{formatTotalTime(totalTime)}</span></p>
            <label> Minutes <br />
                <input 
                    type="number" 
                    name="calcTime" 
                    className='text-black'
                    value={inputMinutes}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onChange={handleInputMinutesChange}
                />
            </label>
            <br />
            <label> Secondes <br />
                <input 
                    type="number" 
                    name="calcTime" 
                    className='text-black'
                    value={inputSeconds} 
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onChange={handleInputSecondsChange}
                />
            </label>
            <div className='pt-5 pl-5'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('+')}>+</button> 
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('-')}>-</button> 
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>Reset</button>
            </div>
        </main>
    );
}
