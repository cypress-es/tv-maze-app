
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
  const { id } = useParams();

  const getComments = async showId => {
    const comments = await api.getComments(showId);
    setComments(comments);
  };

  useEffect(() => {
    getComments(+id)
  }, [id])

  const createComment = async ({ author, text }) => {
    const showId = +id;
    await api.createComment(showId, {
      author,
      text,
      date: new Date(),
    });
    await getComments(showId);
  };

  return (
    <div>
      <h3>Comments</h3>
      <CommentForm
        handleSubmit={createComment}
      />
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
