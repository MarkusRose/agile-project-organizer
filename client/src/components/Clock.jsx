import React, { useState, useEffect } from "react";

function displayDigits(value, digits) {
    return String(value).padStart(digits,'0');
}

function getDay(ct) {
    let day_relation = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return day_relation[ct.getDay()];
}

function printDateTime(ct) {
    let output_time = <div>{getDay(ct)} {displayDigits(ct.getDate(), 2)}.{displayDigits(ct.getMonth(), 2)}.{ct.getFullYear()} {displayDigits(ct.getHours(), 2)}:{displayDigits(ct.getMinutes(), 2)}:{displayDigits(ct.getSeconds(), 2)}</div>;
    return output_time;
}

function Clock() {
    const [currentTime, setTime] = useState(new Date());

    const tick = () => { setTime(new Date()) };

    useEffect(() => {
        const timerID = setInterval(tick, 1000);
        return () => {
            clearInterval(timerID);
        };
    });

    return <div>{printDateTime(currentTime)}</div>;
}

export default Clock;
