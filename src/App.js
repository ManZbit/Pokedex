import "./App.css";
import FetchPokemon from "./Components/FetchPokemon";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <FetchPokemon />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
