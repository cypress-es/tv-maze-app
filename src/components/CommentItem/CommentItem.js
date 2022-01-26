import style from './CommentItem.module.scss';

const CommentItem = () => (
  <div className={style.container}>
    <div className={style.header}>
      <span className={style.author}>author</span>
      <span className={style.date}>{new Date().toISOString()}</span>
    </div>
    <p>lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
  </div>
);

export default CommentItem;
