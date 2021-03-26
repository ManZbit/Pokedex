import FetchPokemon from "./FetchPokemon";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Pokedex = () => {
  return (
    <div>
      <Router>
        <FetchPokemon />
        <Footer />
      </Router>
    </div>
  );
};

export default Pokedex;
