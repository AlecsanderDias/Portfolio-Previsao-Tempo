import React from 'react';

type CityStatus = {
    name: String,
    status: String,
    temperature: Number,
    rainChance: Number,
    windSpeed: Number
}

export default function CurrentStatus({
    name, status, temperature, rainChance, windSpeed
}: CityStatus) {
    return (
        <div className="border-2 border-white rounded-md flex flex-row items-center w-2/5 h-2/5 text-3xl justify-around text-wrap">
            <p className="text-8xl">{temperature}°</p>
            <div className="p-3 flex flex-col gap-3">
                <p className="text-">{name}</p>
                <p>{status}</p>
                <div className="flex gap-3">
                    <p>Rain: {rainChance}%</p>
                    <p>Wind: {windSpeed}m/s</p>
                </div>
            </div>
        </div>
    );
};
