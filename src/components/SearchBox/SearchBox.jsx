import css from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  // function change state filter
  const onChange = (evt) => setFilter(evt.target.value);

  return (
    <div className={css.searchBoxWrap}>
      <p className={css.searchBoxTitle}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
