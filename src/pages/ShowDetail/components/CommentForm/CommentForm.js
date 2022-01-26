import style from './CommentForm.module.scss';

const CommentForm = () => {
  return (
    <form className={style.form}>
      <label htmlFor="author">Author</label>
      <input
        className={`u-full-width ${style.input}`}
        id="author"
        name="author"
      />
      <label htmlFor="comment">comment</label>
      <textarea id="comment"></textarea>
      <button
        className="button-primary"
        type="button"
      >
        save comment
      </button>
    </form>
  );
};

export default CommentForm;
