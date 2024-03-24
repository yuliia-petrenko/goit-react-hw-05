import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTk0OWFhOWMxNTcxMmI5MjAzZGI4NDc3ZGU1NDI0YyIsInN1YiI6IjY1ZmVlOTlmMDQ3MzNmMDE2NGU5YTY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iuk-IpVFKKIk7r3TnDM7v00g-YRAHLi6dKlaNULD6-M';

const fetchFilmsByQuery = async query => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: {
      query: query,
    },
    headers: {
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    },
  });
  return data;
};

export default fetchFilmsByQuery;
