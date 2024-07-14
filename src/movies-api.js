import axios from 'axios';

const trendingUrl =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const movieDetailsUrl = 'https://api.themoviedb.org/3/movie';
const searchUrl = 'https://api.themoviedb.org/3/search/movie';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGFiNDhhNTU4NDZhZjYwNDg4ZWI3ZjdhN2NlM2MyOCIsIm5iZiI6MTcyMDcxMzU2MS4zOTEzMzYsInN1YiI6IjY2OGY1ZDA4ZTI5ZTE2NjE4NTkxMzg1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aMhW3GVc01EjYfh0hChv9nrRCrvy-jDXKQj7yQPMtOk',
    accept: 'application/json',
  },
};

export const getTrendedMovies = async () => {
  try {
    const { data } = await axios.get(trendingUrl, options);
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const getMovieDetails = async id => {
  try {
    const { data } = await axios.get(`${movieDetailsUrl}/${id}`, options);
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getMovieCast = async id => {
  try {
    const { data } = await axios.get(
      `${movieDetailsUrl}/${id}/credits`,
      options
    );
    return data.cast;
  } catch (error) {
    console.error('Error fetching movie cast data:', error);
    throw error;
  }
};

export const getMovieReview = async id => {
  try {
    const { data } = await axios.get(
      `${movieDetailsUrl}/${id}/reviews`,
      options
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching movie cast data:', error);
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const { data } = await axios.get(`${searchUrl}?query=${query}`, options);
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
