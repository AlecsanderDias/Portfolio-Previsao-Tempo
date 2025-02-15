import React from 'react';

export default function StatusCard({hour}) {
    let wind = 10, temp = 30, status="Sunny";
    return (
        <div className="border-2 border-white rounded-md p-3">
            <p>{hour}</p>
            <p>{status}</p>
            <p>{wind}km/h</p>
            <p>{temp}°C</p>
        </div>
    );
};
