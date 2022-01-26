
import CommentItem from '../../../../components/CommentItem/CommentItem';
import CommentForm from '../CommentForm/CommentForm';
import style from './Comments.module.scss';

const Comments = () => {
  return (
    <div>
      <h3>Comments</h3>
      <CommentForm />
      <div className={style.list}>
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  );
};

export default Comments;
