import axios from 'axios';
import NProgress from 'nprogress';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '33da1ae0687d870981cf19ad4813876b';
const TREND_URL = `${BASE_URL}/trending/movie/day`;
const URL_ID = `${BASE_URL}/movie/`;

export const input = document.querySelector('#search-query');

export default {
  async fetchTrendData(page = 1) {
    try {
      NProgress.start()
      const {data} = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${page}`);
      return data;
    } catch (error) {
      console.error('Smth wrong with api:' + error.message);
    }
     finally {NProgress.done()}
  },

  async fetchGenresList() {
    try {
      const allGenres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
      return allGenres.data;
    } catch (error) {
      console.error('Smth wrong with api:' + error.message);
    }
  },

  async fetchFullMovieInfo(id) {
    try {
      NProgress.start()
      const movieFullInfo = await axios.get(`${URL_ID}/${id}?api_key=${API_KEY}`);
      return movieFullInfo.data;  
    } catch (error) {
      console.error('Smth wrong with api:' + error.message);
    }
    finally {NProgress.done()}
  } ,

  async movieSearch(page = 1) {
    try {
      NProgress.start()
      const foundMovies = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${input.value}`);
    return foundMovies.data;
    } catch (error) {
      console.error('Smth wrong with api:' + error.message);
    }
    finally {NProgress.done()}
  },
};


