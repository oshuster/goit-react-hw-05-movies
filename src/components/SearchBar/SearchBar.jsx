import style from './searchBar.module.css';

const Searchbar = ({ setSearchKey }) => {
  const handleSubmit = e => {
    e.preventDefault();
    setSearchKey({ query: e.target.query.value });
  };
  return (
    <section className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchForm_button}>
          <span className={style.SearchForm_button_label}>Search</span>
        </button>
        <input
          className={style.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          name="query"
        />
      </form>
    </section>
  );
};

export default Searchbar;
