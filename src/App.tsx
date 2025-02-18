import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.tsx';
import CurrentStatus from './CurrentStatus.tsx';
import Prevision from './Prevision.tsx';
import { WeatherStatus } from './interfaces/interfaces.ts';
import { getLocation } from './services/data.ts';

function App() {
  let [weather, setWeather] = useState<WeatherStatus | undefined>(undefined);
  let [location] = "Brasilia";
  useEffect(() => {
    // const data = async () => {
    //   const response = await getData(location);
    // };
    // data();

    const location = async () => {
      const result = await getLocation();
      console.log(result);
      setWeather({...result});
    }
    location();
  }, []);
  
  return (
    <div className="min-h-screen max-h-full w-full bg-black flex flex-col gap-5 justify-center items-center text-white">
      <header className="font-bold text-3xl mt-5">
        Previsão do tempo
      </header>
      <SearchBar />
      <CurrentStatus city={weather?.city} country={weather?.country} status={'sunny'} temperature={22} rainChance={23} windSpeed={20}/>
      <Prevision />
    </div>
  );
}

export default App;