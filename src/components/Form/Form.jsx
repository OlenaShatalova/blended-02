import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    onSubmit(value);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
