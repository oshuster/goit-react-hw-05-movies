import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  timeout: 3000,
  params: {
    api_key: 'e5ced2717af8a970eacd5955779d9ef2',
  },
});

const getTopRate = () => {
  return instance.get(`/top_rated`);
};

export { getTopRate };
