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

const getAdminComments = async () => {
  try {
    const { data: comments } = await axios.get('/comments');
    return comments;
  } catch (err) {
    throw err;
  }
};

const deleteComment = async commentId => {
  try {
    await axios.delete(`/comments/${commentId}`);
  } catch (err) {
    throw err;
  }
};

export {
  getComments,
  createComment,
  getAdminComments,
  deleteComment,
};
