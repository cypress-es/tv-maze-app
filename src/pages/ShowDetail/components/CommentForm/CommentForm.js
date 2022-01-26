
import style from './CommentForm.module.scss';

const CommentForm = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit({
      author: e.target.author.value,
      text: e.target.comment.value,
    });
  };
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label htmlFor="author">Author</label>
      <input
        className={`u-full-width ${style.input}`}
        id="author"
        name="author"
      />
      <label htmlFor="comment">comment</label>
      <textarea id="comment" name="comment"></textarea>
      <button
        className="button-primary"
        type="submit"
      >
        save comment
      </button>
    </form>
  );
};

export default CommentForm;
