import style from './searchBar.module.css';

const Searchbar = sendSearchKey => {
  return (
    <section className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={e => e.preventDefault()}>
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
          required
        />
      </form>
    </section>
  );
};

export default Searchbar;
