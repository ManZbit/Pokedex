import typeColors from "./helpers/typeColors";
import "./Cards.css";

const Cards = ({ pokemon }) => {
  return (
    <div className="container">
      <div className="Card__container">
        <div className="Card__name">
          #{pokemon.id} {pokemon.name}
        </div>
        <div className="image__container">
          <img
            src={pokemon.sprites.other["official-artwork"]["front_default"]}
            className="image"
            alt={`${pokemon.name}'s Picture`}
          />
        </div>
        <div className="Card__types">
          {pokemon.types.map((type) => {
            return (
              <div
                className="Card__type"
                style={{ backgroundColor: typeColors[type.type.name] }}
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
