import { useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({ pokemon, getQuery }) => {
  const [search, setSearch] = useState("");

  const onChange = (q) => {
    setSearch(q);
    getQuery(q);
  };

  return (
    <nav className="navbar">
      <div className="images">
        <Link to="/">
          <img className="pokedex__device" src="Logos/Pokedex device.png" />
        </Link>
        <Link to="/">
          <img className="pokedex__logo" src="Logos/Pokedex logo.png" />
        </Link>
      </div>
      <div className="form">
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
    </nav>
  );
};

export default Navbar;


/* 
useEffect(() => {
  setFilteredPokemon(
    pokemon.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  );
}, [search, countries]);



<input
  type="text"
  placeholder="Search Countries"
  onChange={(e) => setSearch(e.target.value)}
/>;
{
  filteredPokemon.map((pokemon, idx) => (
    <Navbar key={idx} {...country} />
  ));
}  */