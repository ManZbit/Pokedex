import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          className="searchBar"
          placeholder="Search Pokemons..."
          value={search}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
      <button className="search__button">
        <AiOutlineSearch className="search__icon" />
      </button>
    </div>
  );
};

export default Search;
