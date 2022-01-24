import axios from 'axios'

const API = 'https://api.tvmaze.com';

const getShows = async () => {
  try {
    const { data: showList } = await axios.get(`${API}/shows`);
    return showList;
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
