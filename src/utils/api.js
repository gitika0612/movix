import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmVmOTg0OGVkOGU1MDE5ZmNjMTkxYjBmZWNhMDcxYyIsInN1YiI6IjY0MTgxMjY1MzEwMzI1MDBlOGEyYTc2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KeUeq-eJvJXmb8x6FODTKoPh18FKh4ZiBKCgouk3yWQ";
const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}