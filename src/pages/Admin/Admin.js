// TODO: refactor
import { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import CommentItem from '../../components/CommentItem/CommentItem';
import * as api from '../../repository/comments';
import trashIcon from '../../assets/icons/trash-bin.png';
import style from './Admin.module.scss';

const sortByDate = comments => (
  comments.sort((a, b) => (
    new Date(b.date) - new Date(a.date)
  ))
);

const Admin = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.getAdminComments()
      .then(setComments);
  }, []);

  const deleteComment = id => {
    api.deleteComment(id);
    const newComments = comments.filter(comment => (
      comment.id !== id
    ));
    setComments(newComments);
  };

  return (
    <MainLayout>
      <h1 className={style.title}>Comment list</h1>
      <div className={style.list}>
        {sortByDate(comments).map(comment => (
          <div key={comment.id} className={style.commentItem}>
            <CommentItem
              author={comment.author}
              date={comment.date}
              text={comment.text}
            />
            <button
              className={style.deleteIcon}
              onClick={() => deleteComment(comment.id)}
            >
              <img
                src={trashIcon}
                alt="delete icon"
              />
            </button>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Admin;
