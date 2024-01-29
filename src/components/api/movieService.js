import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 3000,
  params: {
    api_key: 'e5ced2717af8a970eacd5955779d9ef2',
  },
});

const getTopRate = () => {
  return instance.get(`/trending/all/week`);
};

const getSingleMovie = id => {
  return instance.get(`movie/${id}?language=uk-Uk`);
};

const getCredits = id => {
  return instance.get(`/movie/${id}/credits?language=uk-UK`);
};

const getReviews = id => {
  return instance.get(`/movie/${id}/reviews?language=en-US&page=1`);
};

const searchMovies = query => {
  return instance.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
};

export { getTopRate, getSingleMovie, getCredits, getReviews, searchMovies };
