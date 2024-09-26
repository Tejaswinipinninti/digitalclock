import { useState, useEffect } from "react";
// External CSS file for custom styling

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        let min = time.getMinutes();
        let seconds = time.getSeconds();
        let AmPm = (hours >= 12) ? "Pm" : "Am";

        hours = hours % 12 || 12;
        return `${Addzero(hours)}:${Addzero(min)}:${Addzero(seconds)} ${AmPm}`;
    }

    function Addzero(a) {
        return (a < 10 ? "0" : "") + a;
    }

    return (
        <div className="clock-container">
            <div className="clock-box">
                <h1 className="clock-time">{formatTime()}</h1>
            </div>
        </div>
    );
};

export default DigitalClock;
