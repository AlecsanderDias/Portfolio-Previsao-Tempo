import { WeatherData, WeatherPrevisionCard, WeatherStatus } from "../interfaces/interfaces";

const getLocation = async () => {
    let location, result;
    try {
    location = await fetch("http://ip-api.com/json/?fields=status,message,countryCode,city,query");
    result = await location.json();

    } catch (error) {
        console.log(error?.message);
    }
    return result === undefined ? undefined : filterLocation(result);
}

const getData = async (city: String) => {
    // data needed => city / current location, current hour, previous 24h, later 24h
    const yesterday = getYesterday();
    const tomorrow = getTomorrow();
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    const requestOptions = {
        method: "GET",
        headers: headers
    }
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${yesterday}/${tomorrow}?key=${process.env.REACT_APP_API_KEY}`, requestOptions );
        if(!response.ok) {
            console.log("Fail to Get API data!");
        };
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error?.message);
    }
    return undefined;
};

function getTomorrow() {
    const day = new Date();
    day.setDate(day.getDate() + 1);
    let tomorrow = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}T${day.getHours()}:00:00`;
    return tomorrow;
}

function getYesterday() {
    const day = new Date();
    day.setDate(day.getDate() - 1);
    let yesterday = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}T${day.getHours()}:00:00`;
    return yesterday;
}

function filterLocation(data:any) {
    let location: WeatherStatus = {
        city: `${data.city}, ${data.countryCode}`
    };
    return location;
}

function filterData(data:any) {
    let weather:WeatherStatus = {
        city: data?.address,
        status: data?.currentConditions?.conditions,
        rainChance: data?.currentConditions?.precipprob,
        temperature: data?.currentConditions?.temp,
        windSpeed: data?.currentConditions?.windspeed
    };
    let next:WeatherPrevisionCard[] = [];
    let prev:WeatherPrevisionCard[] = [];
    let currHour = parseInt(`${data?.currentConditions?.datetime[0]}${data?.currentConditions?.datetime[1]}`);
    let n = 2, p = 0;
    for (let i = 0; i < 24; i++) {
        // Arrumar os arrays dos dados com os horários corretos
        next[i] = {
            hour: data.days[n].hours[currHour].datetime,
            status: data.days[n].hours[currHour].conditions,
            windSpeed: data.days[n].hours[currHour].windspeed,
            temperature: data.days[n].hours[currHour].temp
        }
        prev[i] = {
            hour: data.days[p].hours[currHour].datetime,
            status: data.days[p].hours[currHour].conditions,
            windSpeed: data.days[p].hours[currHour].windspeed,
            temperature: data.days[p].hours[currHour].temp
        }
    };
    let result:WeatherData = {
        current: weather,
        next: next,
        previous: prev
    }
    return result;
}

export {getLocation, getData, getTomorrow, getYesterday};