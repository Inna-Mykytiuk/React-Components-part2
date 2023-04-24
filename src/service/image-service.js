import axios from 'axios';

const API_KEY = '7GJbqwp3fuvci7k6fb07ixaF8N6LA4DY6RaYTMMuAnEN07iU84dd5qKT';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  // Визначення параметрів запиту для API Pexels
  const params = {
    query,
    page,
  };

  // Виклик Axios з параметрами запиту
  try {
    const response = await axios.get('/search', { params });
    return response.data;
  } catch (error) {
    // Якщо запит не вдалося, поверніть помилку
    console.error(error);
  }
};

// console.log(getImages('cat', 1));
