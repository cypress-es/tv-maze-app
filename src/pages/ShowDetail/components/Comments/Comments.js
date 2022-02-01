
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentItem from '../../../../components/CommentItem/CommentItem';
import CommentForm from '../CommentForm/CommentForm';
import * as api from '../../../../repository/comments';
import style from './Comments.module.scss';

const sortByDate = comments => (
  comments.sort((a, b) => (
    new Date(b.date) - new Date(a.date)
  ))
);

const Comments = ({ admin }) => {
  const [comments, setComments] = useState([])
  const [error, setError] = useState(false)
  const { id } = useParams();

  const getComments = async showId => {
    api.getComments(showId)
      .then(comments => setComments(comments));
  };

  useEffect(() => {
    getComments(+id)
  }, [id])

  const createComment = async ({ author, text }) => {
    const showId = +id;
    try {
      await api.createComment(showId, {
        author,
        text,
        date: new Date(),
      });
      await getComments(showId);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <CommentForm
        handleSubmit={createComment}
      />
      {error && (
        <h5 data-cy="comment-error-message">Error loading comments</h5>
      )}
      <div className={style.list}>
        {sortByDate(comments).map(comment => (
          <CommentItem
            key={comment.id}
            author={comment.author}
            date={comment.date}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
