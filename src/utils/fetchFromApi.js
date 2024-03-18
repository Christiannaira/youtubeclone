import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {

    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '1e8571aaf4msh6c0ad5a8f8c2affp1e9d7ejsnc63beb1b3a52',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
};

export const fetchFromAPi = async (url) => {

    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    console.log(data);

}

