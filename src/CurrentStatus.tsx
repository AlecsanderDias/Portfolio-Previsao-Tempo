import React from 'react';
import { WeatherStatus } from './interfaces/interfaces.ts';

export default function CurrentStatus({
    city, status, temperature, rainChance, windSpeed
}: WeatherStatus) {
    return (
        <div className="border-2 border-white rounded-md flex flex-row items-center justify-around w-2/4 h-2/4 lg:w-2/5 lg:h-2/5 text-base sm:text-xl lg:text-3xl text-wrap p-3">
            <p className="text-5xl sm:text-8xl">{temperature}°</p>
            <div className="p-3 flex flex-col gap-3">
                <p>{city}</p>
                <p>{status}</p>
                <div className="flex gap-3 justify-center">
                    <p>Rain: {rainChance}%</p>
                    <p>Wind: {windSpeed}m/s</p>
                </div>
            </div>
        </div>
    );
};
