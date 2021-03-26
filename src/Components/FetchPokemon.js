import { useState, useEffect } from "react";
import axios from "axios";
import "./FecthPokemon.css";
import "./helpers/PokeballSpinner.css";
import Cards from "./Cards";
import Navbar from "./Navbar/Navbar";
import PrevNext from "./PrevNext";

const FetchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [filteredPokemon, setFilteredPokemon] = useState("");
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);

  useEffect(() => {
    const getPokemon = async () => {
      const res1 = await axios.get(url);
      const res2 = await res1.data;
      const res3 = await res2.results;
      const pokeRes = await axios.all(res3.map((res1) => axios.get(res1.url)));
      setPokemon(pokeRes.map((res1) => res1.data));
      setLoading(false);
      setNextPageUrl(res2.next);
      setPrevPageUrl(res2.previous);
      console.log(res2);
    };
    getPokemon();
  }, [query, url]);

  useEffect(() => {
    setFilteredPokemon(
      pokemon.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    );
  }, []);

  console.log(nextPageUrl);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const goNextPage = () => {
    setUrl(nextPageUrl);
  };

  const goPrevPage = () => {
    setUrl(prevPageUrl);
  };

  return (
    <div>
      <div>
        <Navbar pokemon={pokemon} getQuery={(q) => setQuery(q)} />
      </div>
      {loading ? (
        <div className="wrapper">
          <img src="./Logos/Pokeball.png" className="spinner" />
          <p className="loading">Loading...</p>
        </div>
      ) : (
        <>
          <PrevNext
            loading={loading}
            setLoading={setLoading}
            goNextPage={nextPageUrl ? goNextPage : null}
            goPrevPage={prevPageUrl ? goPrevPage : null}
          />
          <div className="grid-container">
            {pokemon.map((pokemon, i) => (
              <Cards key={i} pokemon={pokemon} />
            ))}
          </div>
          <PrevNext
            loading={loading}
            setLoading={setLoading}
            goNextPage={nextPageUrl ? goNextPage : null}
            goPrevPage={prevPageUrl ? goPrevPage : null}
          />
        </>
      )}
    </div>
  );
};

export default FetchPokemon;

/* setInputItems(
  users.filter((item) =>
    item.name.toLowerCase().startsWith(inputValue.toLowerCase())
  )
);

<div className="anime-list">
  {props.animeList.map((anime) => (
    <AnimeCard anime={anime} key={anime.mal_id} />
  ))}
</div>;

const filtered = countryListDefault.filter((country) => {
  return country.name.toLowerCase().includes(input.toLowerCase());
});

{ countryList.map((data,index) => {
  if (data) {
    return (
      <div key={data.name}>
        <h1>{data.name}</h1>
</div>	
   )	
} */
