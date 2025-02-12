import React from "react";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

// interface GameDetails {
//   slug: string;
//   description: string;
//   released: string;
//   metacritic: number;
// }

interface CardProps {
  game: Game;
}

const Card: React.FC<CardProps> = ({ game }) => {
  return (
    <div key={game.id} className="card">
      <img src={game.background_image} alt={game.name} />
      <h3>{game.name}</h3>
    </div>
  );
};

export default Card;
