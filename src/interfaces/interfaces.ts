interface WeatherStatus {
    location: String,
    status: String,
    temperature: Number,
    rainChance: Number,
    windSpeed: Number
}

interface WeatherPrevisionCard {
    hour: String,
    status: String,
    windSpeed: Number,
    temperature: Number
}


interface WeatherData {
    current: WeatherStatus,
    previous: WeatherPrevisionCard[],
    next: WeatherPrevisionCard[]
}

export {
    WeatherData,
    WeatherStatus
};