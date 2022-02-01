
import style from './CommentForm.module.scss';

const getAuthor = () => (
  localStorage.getItem('author') ? localStorage.getItem('author') : ''
);

const CommentForm = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit({
      author: e.target.author.value,
      text: e.target.comment.value,
    });
    localStorage.setItem('author', e.target.author.value);
  };
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label htmlFor="author">Author</label>
      <input
        className={`u-full-width ${style.input}`}
        data-cy="comment-form-author"
        id="author"
        name="author"
        defaultValue={getAuthor()}
      />
      <label htmlFor="comment">comment</label>
      <textarea data-cy="comment-form-text" id="comment" name="comment"></textarea>
      <button
        className="button-primary"
        data-cy="comment-form-submit-button"
        type="submit"
      >
        save comment
      </button>
    </form>
  );
};

export default CommentForm;
