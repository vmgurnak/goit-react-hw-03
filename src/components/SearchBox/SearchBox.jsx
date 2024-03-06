import css from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={css.searchBoxWrap}>
      <p className={css.searchBoxTitle}>Find contacts by name</p>
      <input className={css.searchBoxInput} type="text" />
    </div>
  );
};

export default SearchBox;
