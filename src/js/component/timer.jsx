import React, { useState, useEffect } from 'react';

function DigitalCounter() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return {
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(secs).padStart(2, '0')
        };
    };

    const time = formatTime(seconds);

    return (
        <div className="counter">
            <div className="digit"><i className="bi bi-clock-history"></i></div>
            <div className="digit">{time.hours[0]}</div>
            <div className="digit">{time.hours[1]}</div>
            <div className="separator">:</div>
            <div className="digit">{time.minutes[0]}</div>
            <div className="digit">{time.minutes[1]}</div>
            <div className="separator">:</div>
            <div className="digit">{time.seconds[0]}</div>
            <div className="digit">{time.seconds[1]}</div>
        </div>
    );
}

export default DigitalCounter;