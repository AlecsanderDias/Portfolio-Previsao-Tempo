import React from 'react';

export default function StatusCard({hour}) {
    let min = 10, max = 30, status="Sunny";
    return (
        <div className="border-2 border-white rounded-md p-3">
            <p>{hour}:00</p>
            <p>{status}</p>
            <p>{min}° | {max}°</p>
        </div>
    );
};
