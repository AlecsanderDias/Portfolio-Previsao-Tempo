import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.tsx';
import CurrentStatus from './CurrentStatus.tsx';
import Prevision from './Prevision.tsx';
import { WeatherStatus } from './interfaces/interfaces.ts';
import { getLocation, getData } from './services/data.ts';

function App() {
  let [weather, setWeather] = useState<WeatherStatus | undefined>(undefined);
  let [refreshCounter, setRefreshCounter] = useState<number>(3);
  let [errorMessage, setErrorMessage] = useState<string>("");
  const updateWeather = async () => {
    if(refreshCounter > 0) {
      console.log(weather?.city, refreshCounter);
      setRefreshCounter((refreshCounter:number) => refreshCounter - 1);
    }
  };

  const getCityWeather = async (city:string) => {
    console.log("City => ", city);
  };
  
  useEffect(() => {
    const data = async (city) => {
      const response = await getData(city);
      console.log(response);
      return response;
    };
    const location = async () => {
      const result = await getLocation();
      console.log(result);
      const final = await data(result?.city);
      setWeather(final);
    }
    location();
  }, []);

  return (
    <div className="min-h-screen max-h-full w-full bg-black flex flex-col gap-5 justify-center items-center text-white">
      <header className="font-bold text-3xl mt-5">
        Previsão do tempo
      </header>
      <SearchBar getCityWeather={getCityWeather}/>
      <p className="bg-red-200 text-red-600 border-2 border-red-600 rounded-md p-2">{"Teste"}</p>
      <button className="border-white border-2 rounded-md p-2 hover:bg-slate-800" onClick={() => updateWeather()}>Refresh Weather</button>
      <CurrentStatus city={weather?.current?.city} status={weather?.current?.status} temperature={weather?.current?.temperature} rainChance={weather?.current?.rainChance} windSpeed={weather?.current?.windSpeed}/>
      <Prevision />
    </div>
  );
}

export default App;