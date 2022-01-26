import axios from 'axios';

const getComments = async showId => {
  try {
    const { data: comments } = await axios.get(`/shows/${showId}/comments`);
    return comments;
  } catch (err) {
    throw err;
  }
};

const createComment = async (showId, payload) => {
  try {
    await axios.post(`/shows/${showId}/comments`, {
      ...payload,
      showId,
    });
  } catch (err) {
    throw err;
  }
};

export {
  getComments,
  createComment,
};
