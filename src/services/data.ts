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
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${yesterday}/${tomorrow}?key=${process.env.REACT_APP_API_KEY}`, requestOptions )
            .then(res => res.json())
            .then(data => console.log(data));
    } catch (error) {
        console.log(error?.message);
    }
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

function filterData(data) {

}

export {getData, getTomorrow, getYesterday};