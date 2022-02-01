import style from './CommentItem.module.scss';

const CommentItem = ({ author, date, text }) => (
  <div className={style.container} data-cy="comment-item">
    <div className={style.header}>
      <span className={style.author}>{author}</span>
      <span className={style.date}>{date}</span>
    </div>
    <p>{text}</p>
  </div>
);

export default CommentItem;
