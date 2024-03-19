import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {

    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '0be3bf4bbemsh4e30834bac79200p1a8204jsnb7ca443a2b18',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
};

export const fetchFromAPi = async (url) => {

    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;


}

