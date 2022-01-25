import axios from 'axios'

const API = 'https://api.tvmaze.com';

const filterResults = (results, options = {}) => (
  results.filter(result => {
    const keys = Object.keys(options);
    if (keys.length === 0) return true;
    return Object.keys(options).some(key => (
      result[key] === options[key]
    ))
  })
);

const getShows = async (filters = {}) => {
  try {
    let path = '/shows';
    let textFilter = (filters.title && filters.title !== '');
    if (textFilter) {
      path = `/search/shows?q=${filters.title}`;
    }
    const { data: showList } = await axios.get(`${API}${path}`);
    let mappedResponse = textFilter ? showList.map(({ show }) => show) : showList;
    if (filters.options) {
      mappedResponse = filterResults(mappedResponse, filters.options);
    }
    return mappedResponse;
  } catch (err) {
    throw err;
  }
};

const getShowDetail = async showId => {
  try {
    const { data: detail } = await axios.get(`${API}/shows/${showId}`);
    return detail;
  } catch (err) {
    throw err;
  }
};

export {
  getShows,
  getShowDetail,
};
