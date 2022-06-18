import React from "react";

function displayDigits(value, digits) {
    return String(value).padStart(digits,'0');
}

function getDay(ct) {
    let day_relation = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return day_relation[ct.getDay()];
}

function printDateTime(ct) {
    let output_time = <div>{getDay(ct)} {displayDigits(ct.getDate(), 2)}.{displayDigits(ct.getMonth(), 2)}.{ct.getFullYear()} {displayDigits(ct.getHours(), 2)}:{displayDigits(ct.getMinutes(), 2)}</div>;
    return output_time;
}

function Clock() {
    let current_time = new Date();
    return <div>{printDateTime(current_time)}</div>;
}

export default Clock;
