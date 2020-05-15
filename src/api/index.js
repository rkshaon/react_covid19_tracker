import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableURL = url;
    if(country){
        changeableURL = `${url}/countries/${country}`;
    }
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        // console.log(response);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch(error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{
        // fetch data
        const { data } = await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch(error){
        // handling error
    }
}

export const fetchCountries = async () => {
    try {
        // fetch data
        const { data: { countries } } = await axios.get(`${url}/countries`);
        // console.log(response);
        return countries.map((country) => country.name);
    } catch(error){
        // hadnling error
    }
}